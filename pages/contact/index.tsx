import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <>
      <MainLayout>
        <h1>CONTACT</h1>

        <h1 className="title">
          Ir a <Link href={"/"}>HOME</Link>
        </h1>
      </MainLayout>
    </>
  );
}
