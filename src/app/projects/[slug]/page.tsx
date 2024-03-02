import { Button } from "@/components/ui/button";
import { getProjectsDetail } from "@/lib/action";
import Link from "next/link";

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getProjectsDetail(params.slug);

  if (!data) throw new Error("Error Fetching Product Detail.");

  return (
    <div className="flex flex-col items-start gap-4">
      <p>
        The detail of{" "}
        <span className="font-bold text-purple-400">{data.title}</span> is in
        progress. Please come back later 😬🙏🏻
      </p>
      <Link href={"/"}>
        <Button variant={"secondary"}>Go Back</Button>
      </Link>
    </div>
  );
}
