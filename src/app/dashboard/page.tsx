
import Dropzone from "@/components/Dropzone";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "../../../firebase";
import { Filetype } from "../../../typings";
import TableWrapper from "@/components/table/TableWrapper";

async function Dashboard() {
  const { userId } = auth();

  const docResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: Filetype[] = docResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));

  return (
    <div >
      <Dropzone />
      <section className="px-5">
        <h2 className="text-bold">All Files</h2>
        <div>
          <TableWrapper skeletonFiles={skeletonFiles}/>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
