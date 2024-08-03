import { CarouselCard } from "@/components/ui/carousel/CarouselCard";
import { Intro } from "@/components/ui/intro/Intro";
import { Review } from "@/components/ui/review/Review";
import { Services } from "@/components/ui/services/Services";
import { serviceList } from "@/data/list";

export default function Home() {
  return (
    <>
      <Intro />
      <Services serviceList={serviceList} />
      {/* Todo : 이 순서에 서비스의 미리보기 및 설명 등 프리뷰 섹션 넣기 */}
      <CarouselCard />
      <Review />
    </>
  );
}
