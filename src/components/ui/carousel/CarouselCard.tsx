"use client";

import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Paper, Text, Title, Button } from "@mantine/core";
import classes from "./CarouselCard.module.css";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        View Details
      </Button>
    </Paper>
  );
}

const data = [
  // Planned Updates – 계획된 업데이트
  // Upcoming Changes – 다가오는 변경 사항
  // Future Enhancements – 미래의 개선 사항
  // Scheduled Updates – 예정된 업데이트
  // Expected Updates – 예상되는 업데이트
  // Anticipated Changes – 예상되는 변화
  // Next Releases – 다음 출시 예정
  // Upcoming Features – 다가오는 기능
  // Future Releases – 미래의 출시
  // Planned Improvements – 계획된 개선 사항
  {
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "[2024-08-04] 기본 레이아웃 설정 및 홈 화면 프로토 타입",
    category: "개선 사항",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "홈페이지 라우터 등록 및 각 페이지 프로토 타입",
    category: "예정된 업데이트",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "UI/UX 개선 및 코드 정리",
    category: "예정된 업데이트",
  },
  {
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "배포 테스트 및 SEO 설정",
    category: "예정된 업데이트",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "물타기 계산기 서비스 출시 계획",
    category: "예정된 업데이트",
  },

  // {
  //   image:
  //     "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  //   title: "Active volcanos reviews: travel at your own risk",
  //   category: "nature",
  // },
];

export function CarouselCard() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.container}>
      <Carousel
        withIndicators
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        // loop
        controlSize={35}
        align="start"
      >
        {slides}
      </Carousel>
    </div>
  );
}
