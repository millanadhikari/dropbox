"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Filetype } from "../../../typings";
import prettyBytes from "pretty-bytes";
import { FileIcon, defaultStyles } from "react-file-icon";
import { COLOR_EXTENSION_MAP } from "../../../constant";

export const columns: ColumnDef<Filetype>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            // @ts-ignore
            {...defaultStyles[extension]}
          ></FileIcon>
        </div>
      );
    },
  },
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue, ...props }) => {
      return (
        <a
          href={renderValue() as string}
          target="_blank"
          className="underline text-blue500 hover:text-blue-600"
        >
          {prettyBytes(renderValue() as number)}
        </a>
      );
    },
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props }) => {
      return (
        <a
          href={renderValue() as string}
          target="_blank"
          className="underline text-blue500 hover:text-blue-600"
        >
          Download
        </a>
      );
    },
  },
];
