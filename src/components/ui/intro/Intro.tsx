"use client";

import {
  Image,
  Container,
  Title,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "@/assets/intro.svg";
import classes from "./Intro.module.css";

export function Intro() {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>Comprehensive</span> Expense
            and Management Tool
          </Title>
          <Text c="dimmed" mt="md">
            우리의 모든 기능은 직관적이고 사용하기 쉽도록 설계되었습니다. 따라서
            복잡한 절차 없이 누구나 손쉽게 사용할 수 있습니다.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>User-Centric Design</b> – 사용자의 필요와 편의에 맞춘 다양한
              설정 옵션을 제공할 예정입니다.
            </List.Item>
            <List.Item>
              <b>Continuous Updates</b> – 사용자 피드백을 기반으로 지속적으로
              업데이트됩니다.
            </List.Item>
            <List.Item>
              <b>Possibly Free for Life</b> – 누구나 자유롭게 사용하고, 무료로
              이용 가능합니다.
            </List.Item>
          </List>
        </div>
        <Image src={image.src} className={classes.image} alt="intro" />
      </div>
    </Container>
  );
}
