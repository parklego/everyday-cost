import { Card, Text, SimpleGrid, UnstyledButton, Group } from "@mantine/core";

import classes from "./Services.module.css";
import { theme } from "@/lib/theme";
import { ServiceItem } from "@/types";

interface ServicesProps {
  serviceList: ServiceItem[];
}

export function Services({ serviceList }: ServicesProps) {
  const items = serviceList.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between">
        <Text className={classes.title}>Services</Text>
      </Group>
      <SimpleGrid cols={2} mt="md" p="lg">
        {items}
      </SimpleGrid>
    </Card>
  );
}
