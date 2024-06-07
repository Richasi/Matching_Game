import group157Image from "../image/ScreenGame/Group-157.png";
import oneImage from "../image/ScreenGame/01.png";
import twoImage from "../image/ScreenGame/02.png";
import threeImage from "../image/ScreenGame/03.png";
import cardImage from "../image/ScreenGame/card.png";
import card1Image from "../image/ScreenGame/card-1.png";
import card2Image from "../image/ScreenGame/card-2.png";
import Headinglifeskills1Image from "../image/ScreenGame/Heading-life-skills1.png";
import Headinglifeskills2Image from "../image/ScreenGame/Heading-life-skills2.png";
import Headinglifeskills3Image from "../image/ScreenGame/Heading-life-skills3.png";
import Headinglifeskills4Image from "../image/ScreenGame/Heading-life-skills4.png";
import Headinglifeskills5Image from "../image/ScreenGame/Heading-life-skills5.png";
import Headinglifeskills6Image from "../image/ScreenGame/Heading-life-skills6.png";
import Headinglifeskills7Image from "../image/ScreenGame/Heading-life-skills7.png";

const cardsData = [
  {
    id: 1,
    images: [
      card1Image,
      cardImage,
      Headinglifeskills1Image,
      Headinglifeskills2Image,
      oneImage
    ],
    styles: [
      "card1Image",
      "cardImage",
      "Headinglifeskills1Image",
      "Headinglifeskills2Image",
      "oneImage"
    ],
    alts: [
      "Card 1",
      "Card",
      "Heading Life Skills 1",
      "Heading Life Skills 2",
      "One"
    ]
  },
  {
    id: 2,
    images: [
      card2Image,
      Headinglifeskills3Image,
      Headinglifeskills4Image,
      twoImage
    ],
    styles: [
      "card2Image",
      "Headinglifeskills3Image",
      "Headinglifeskills4Image",
      "twoImage"
    ],
    alts: ["Card 2", "Heading Life Skills 3", "Heading Life Skills 4", "Two"]
  },
  {
    id: 3,
    images: [
      group157Image,
      Headinglifeskills5Image,
      Headinglifeskills6Image,
      Headinglifeskills7Image,
      threeImage
    ],
    styles: [
      "group157Image",
      "Headinglifeskills5Image",
      "Headinglifeskills6Image",
      "Headinglifeskills7Image",
      "threeImage"
    ],
    alts: [
      "Group 157",
      "Heading Life Skills 5",
      "Heading Life Skills 6",
      "Heading Life Skills 7",
      "Three"
    ]
  }
];

export default cardsData;
