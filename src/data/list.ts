import { ReviewItem, ServiceItem } from "@/types";
import {
  IconReceiptRefund,
  IconCalculator,
  IconWaterpolo,
  IconNotes,
  IconCooker,
  IconCookieMan,
  IconAlien,
  IconDog,
  IconMan,
  IconCat,
  IconBug,
} from "@tabler/icons-react";
// https://tabler.io/icons

export const serviceList: ServiceItem[] = [
  {
    title: "생활비 저축 계산기",
    icon: IconCalculator,
    color: "violet",
    description: "도대체 얼마나 줄줄 새고 있는지 알아보는 계산기",
  },
  {
    title: "물타기 계산기",
    icon: IconWaterpolo,
    color: "indigo",
    description: "얼마나 물을 타야 탈출 할 수 있을까? 한강 탈출기",
  },
  {
    title: "To-do 리스트",
    icon: IconNotes,
    color: "blue",
    description: "오늘 해야 할 것만 생각 정리 하기",
  },
  {
    title: "맛집 리스트",
    icon: IconCookieMan,
    color: "green",
    description: "호불호 없는 맛집 리스트",
  },
  // {
  //   title: "Receipts",
  //   icon: IconReceipt,
  //   color: "teal",
  //   description: "Combusken battles with the intensely hot flames it spews",
  // },
  // { title: "Taxes", icon: IconReceiptTax, color: "cyan" },
  // { title: "Reports", icon: IconReport, color: "pink" },
  // { title: "Payments", icon: IconCoin, color: "red" },
  // { title: "Cashback", icon: IconCashBanknote, color: "orange" },
];

export const reviewList: ReviewItem[] = [
  {
    id: 1,
    icon: IconMan,
    title: "어떤 행인",
    color: "blue",
    description:
      "제가 월급 받자 마자 통장이 텅텅 비었는데 그 이유를 알 것 같아요!",
  },
  {
    id: 2,
    icon: IconBug,
    title: "하루살이",
    color: "cyan",
    description: "To-do 리스트 애용중입니다.",
  },

  {
    id: 3,
    icon: IconCat,
    title: "봄이",
    color: "gray",
    description: "meow ~ meow ~ meow ~",
  },
  {
    id: 4,
    icon: IconAlien,
    title: "외계인",
    color: "green",
    description: "지구를 침공하려했지만 잠시 보류하겠다. #@$$",
  },
];
