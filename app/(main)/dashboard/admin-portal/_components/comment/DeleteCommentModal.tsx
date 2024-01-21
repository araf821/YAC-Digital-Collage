import { deleteComment } from "@/actions/deleteComment";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/input";
import { dateFormat } from "@/lib/dateFormat";
import { Post, User } from "@prisma/client";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { toast } from "sonner";

interface DeleteCommentModalProps {
  comment: {
    id: string;
    content: string;
  };
  isOpen: boolean;
  onOpenChange: () => void;
}

const DeleteCommentModal = ({
  comment,
  onOpenChange,
  isOpen,
}: DeleteCommentModalProps) => {
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const onDelete = async () => {
    startTransition(async () => {
      await deleteComment(comment.id, value)
        .then((data) => {
          if (data.success) {
            onOpenChange();
            return toast.success(data.success);
          }

          return toast.error(data.error);
        })
        .catch(() => {
          toast.error("Something went wrong.");
        });
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-screen-sm bg-[#1c1c1c] py-6 outline-none">
        <DialogHeader>
          <DialogTitle>Delete Comment</DialogTitle>
          <DialogDescription>
            Comment will be shown as deleted if it has any replies. Otherwise,
            deleted permanently.
          </DialogDescription>
        </DialogHeader>
        <hr className="border-zinc-700" />

        <div className="space-y-0">
          <p className="text-sm font-semibold text-zinc-400">Comment</p>
          <p className="rounded-sm bg-[#252525] p-2 max-md:text-sm md:p-3">
            {comment.content}
          </p>
        </div>

        <div className="mt-2.5 flex flex-col gap-1 max-md:px-4 md:gap-2">
          <p className="select-none">
            Type this in to confirm: {comment.id.slice(0, 7)}
          </p>
          <Input
            className="-mt-1"
            type="text"
            value={value}
            disabled={isPending}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex gap-4 max-md:flex-col max-md:gap-2">
            <Button
              onClick={() => onOpenChange()}
              variant={"ghost"}
              className="mt-2 w-full"
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button
              onClick={onDelete}
              variant={"destructive"}
              className="mt-2 w-full"
              disabled={isPending || value !== comment.id.slice(0, 7)}
            >
              Delete Comment
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCommentModal;
