"use client";

import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
} from "@mantine/core";
import { theme } from "@/lib/theme";
import classes from "./Review.module.css";
import { reviewList } from "@/data/list";

export function Review() {
  const items = reviewList.map((item) => (
    <div className={classes.item} key={item.id}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={60}
        radius="md"
      >
        <item.icon color={theme.colors[item.color][4]} size="2rem" />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={1200} className={classes.wrapper}>
      <Text className={classes.supTitle}>사용 후기</Text>

      <Title className={classes.title} order={2}>
        여러 <span className={classes.highlight}>고객들</span>의 후기를
        살펴보세요.
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          매일의 루틴을 간소화하고 향상시키기 위해 설계된 다양한 기능을 확인해
          보세요. 그리고 당신의 후기도 들려주세요.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
