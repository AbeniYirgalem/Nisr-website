// src/constants/imageMap.ts

import image35 from "../assets/images/image-35.png";
import image58 from "../assets/images/image-58.png";
import image59 from "../assets/images/image-59.png";
import image60 from "../assets/images/image-60.png";
import image38 from "../assets/images/image-38.png";
import image61 from "../assets/images/image-61.png";
import image63 from "../assets/images/image-63.png";
import image64 from "../assets/images/image-64.png";
import image65 from "../assets/images/image-65.png";

type ImageMap = {
    tag: string,
    location: string
}

export const categoryImageMap: ImageMap[] = [
    {tag: "cg_electronics", location: image35},
    {tag: "cg_stationary", location: image58},
    {tag: "cg_food_and_drink", location: image59},
    {tag: "cg_fashion", location: image60},
    {tag: "cg_services", location: image38},
    {tag: "cg_health_and_beauty", location: image61},
    {tag: "cg_lost_and_found", location: image63},
    {tag: "cg_books_and_art", location: image64},
    {tag: "cg_sports_and_outdoors", location: image65},
    {tag: "cg_sports_and_outdoors", location: image65},
    {tag: "cg_property", location: image65},
    {tag: "cg_home_and_furniture" , location: image65},
    {tag: "cg_babies_and_kids" , location: image65},
    {tag: "cg_vehicles_and_accessories", location: image65},
    {tag: "cg_machinery_and_construction", location: image65},
    {tag: "cg_others", location: image65},
];