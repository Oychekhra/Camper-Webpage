import img1 from '../Assets/motormockdate/camp1.png'
import img2 from "../Assets/motormockdate/camp2.png";
import img3 from "../Assets/motormockdate/camp3.png";
import img5 from '../Assets/UsedCars/5.jfif'
import img4 from '../Assets/Tuning/4.jfif';
export const carreview = {
    maindata: [
      {
        id: 1,
        car: {
            photo: `${img1}`,
            name: "르벤투스S+",
            company: "다온티앤티",
          },
        view:{
            comment: "Spacious interior with excellent storage options. Perfect for long camping trips with the family.",
            viewed: "Yes",
            date: "2024-04-16"
          },
        },

    {
        id:2,
        car: {
            photo: `${img2}`,
            name: "르벤투스6805",
            company: "다온티앤티",
          },
        view:{
            comment: "The camping car offers a spacious interior with excellent storage options, making it perfect for long trips with the family. Its durable construction ensures reliability on the road, while the modern amenities add comfort and convenience to the camping experience.",
            viewed: '12',
            date: "2024-04-16",
          },
    },
    {
        id:3,
        car: {
            photo: `${img3}`,
            name: "포스650",
            company: "다온티앤티",
          },
        view:{
            comment: "With its compact design and easy maneuverability, this camping car is an ideal choice for solo adventurers looking to explore the great outdoors. Despite its smaller size, it doesn't compromise on comfort, offering all the essential features needed for a memorable camping trip.",
            viewed: '8',
            date: "2024-04-17",
      },

    },
    {
        id:4,
        car: {
            photo: `${img4}`,
            name: '퍼포먼스X',
            company: '터보드라이브',
          },
        view:{
            comment: "Experience the freedom of boondocking with this camping car's self-contained power system, allowing you to camp off-grid for extended periods. With solar panels and a powerful battery bank, you can enjoy electricity and amenities even in remote wilderness areas, giving you the ultimate freedom to explore off the beaten path.",
            viewed: 40,
            date: "2024-05-02"
          },
    },
    {
        id:5,
        car: {
            photo: `${img5}`,
            name: 'Toyota Highlander',
            company: 'Outdoor Motors',
          },
        view:{
            comment: "Entertain friends and family on the go with this camping car's multimedia entertainment system, featuring a built-in TV, DVD player, and surround sound speakers. Whether you're hosting a movie night or enjoying your favorite music on a road trip, you'll have all the entertainment you need to keep everyone entertained and happy.",
            viewed: 70,
            date: "2024-05-09"
          },
    },

    ],
    };