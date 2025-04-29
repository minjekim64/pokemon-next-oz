import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[darkgray] p-10 block text-center">
      <h1 className="text-[2em] font-bold mb-10">페이지를 찾을 수 없습니다.</h1>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-white hover:bg-gray-300 transition">
        메인으로 돌아가기
      </Link>
    </div>
  );
}
