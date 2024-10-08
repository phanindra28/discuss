import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";
import paths from "@/paths";
export default async function Home() {
  const session = await auth();
  console.log("User", session?.user);
  return (
    <div>
      <form action={actions.signIn}>
        <Button type={"submit"}>Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button type={"submit"}>Sign Out</Button>
      </form>
      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed out</div>
      )}
      {/*From Client Component:*/}
      {/*<Profile/>*/}
    </div>
  );
}
