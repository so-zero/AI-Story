import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-8 md:p-24 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Create <span className="text-orange-500">Worlds</span>, Write
        <span className="text-orange-500"> Dreams</span>.
      </h1>
      <p className="max-w-4xl mt-4 md:mt-6 text-base md:text-lg text-center text-gray-500">
        AI-Story 는 세상을 창조하고, 꿈을 쓰고, 이야기를 전하는 데 도움을 주는
        플랫폼입니다.
      </p>
      <div className="mt-10 flex gap-8">
        <Button className="md:px-8 md:py-6 md:text-lg font-medium bg-orange-500 hover:bg-orange-400">
          시작하기
        </Button>
        <Button className="md:px-8 md:py-6 md:text-lg font-medium" asChild>
          <Link href="/library">도서목록</Link>
        </Button>
      </div>
    </div>
  );
}
