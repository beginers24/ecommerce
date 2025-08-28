import Link from "next/link";
import { Button } from "@/components/ui/button";

import { UserIcon } from "lucide-react";

const UserButton = async () => {
  return (
    <div>
      <Button asChild>
        <Link href="/sign-in">
          <UserIcon /> Sign In
        </Link>
      </Button>
    </div>
  );
};

export default UserButton;
