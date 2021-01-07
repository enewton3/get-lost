const db = require("../db/connection");
const Product = require("../schema/product");

db.on("error", console.error.bind(console, "MongoDB Connection Error"));

const main = async () => {
  const products = [
    {
      name: "Osprey Daylite Plus Pack",
      imgURL: [
        "https://www.rei.com/media/137ffd0d-f5b1-4e43-b3ce-bb0b62b4d324?size=784x588",
        "https://www.osprey.com/images/product/hero/dayliteplus_f19_detail4_realred.jpg",
        "https://www.osprey.com/images/product/hero/dayliteplus_sideback_realred.jpg"
      ],
      description:
        "Take the Osprey Daylite Plus pack on a one-day hike or a plane trip as your carry-on. A padded harness and simple webbing hipbelt make it easy and comfortable to carry.",
      price: "$65.00",
      type: "Day-Trip",
    },
    {
      name: "Cotopaxi Luzon 24L Pack - Del Dia",
      imgURL:[
        "https://www.rei.com/media/a38ca266-913f-4eb0-b225-9cf1529e78b8?size=784x588",
        "http://res.cloudinary.com/cotopaxi/image/upload/c_limit,q_auto:best,w_1024/v1608686585/live_choice/axs1zevwyjnawwytpazs.jpg",
        "https://www.rei.com/media/b83b7084-dab8-4643-8c6d-126248a1abea?size=784x588"
      ],
      description:
        "A big brother to the do-it-all, 18-liter Luzon, the Cotopaxi Luzon Del Dia 24-liter pack offers everything you love about the Luzon, plus added capacity and a few extra features.",
      price: "$75.00",
      type: "Day-Trip",
    },
    {
      name: "Gregory Maya 16 Pack - Women's",
      imgURL: [
        "https://www.rei.com/media/52afb1a7-3b5a-4130-b0ed-e37c6ebfa383?size=784x588",
        "https://www.gregorypacks.com/dw/image/v2/AAUE_PRD/on/demandware.static/-/Sites-product-catalog/default/dwc5e278da/collections/_gregory/Maya/500x500/GMP-S19-Maya16_PoppyRed_Back34.jpg?sw=1500&sfrm=png&q=70",
        "https://www.gregorypacks.com/dw/image/v2/AAUE_PRD/on/demandware.static/-/Sites-product-catalog/default/dw1d1dbd7b/collections/_gregory/Maya/500x500/GMP_S19_Maya_6-HIPBELT-POCKET.jpg?sw=1500&sfrm=png&q=70"
      ],
      description:
        "Head out for a quick day hike or lightning-fast summit with the women's Gregory Maya 16 pack. Its snug, ergonomic fit sits close to your body as you scramble from boulder field to trail.",
      price: "$99.00",
      type: "Day-Trip",
    },
    {
      name: "Osprey Exos 58 Pack - Men's",
      imgURL: [
        "https://www.rei.com/media/45116072-0bc8-45f1-9bbe-d4335d32908c?size=784x588",
        "https://www.osprey.com/images/product/hero/exos58s18_sideback_tunnelgreen.jpg",
        "https://www.osprey.com/images/product/hero/exos58s18_s18_body2_blazeblack.jpg"
      ],
      description:
        "Light on the scale but not on comfort, the ultralight Osprey Exos 58 pack offers a ventilated suspension system that evenly distributes weight and offers a supportive fit for logging big miles.",
      price: "$220.00",
      type: "Expedition",
    },
    {
      name: "Gregory Paragon 58 Pack - Men's",
      imgURL:[
        "https://www.rei.com/media/c541033d-68e2-4971-9da3-fe66b8e9ea9f?size=784x588",
        "https://www.gregorypacks.com/dw/image/v2/AAUE_PRD/on/demandware.static/-/Sites-product-catalog/default/dwbe09609a/collections/_gregory/Paragon/500x500/778561640be02.jpg?sw=1500&sfrm=jpg&q=70",
        "https://cdn-fsly.yottaa.net/59cb961932f01c296feed4f8/www.gregorypacks.com/v~4b.28/dw/image/v2/AAUE_PRD/on/demandware.static/-/Sites-product-catalog/default/dwae2faec5/collections/_gregory/Paragon/500x500/paragonwaterbottle.jpg?sw=1500&sfrm=jpg&q=70&yocs=d_h_"
      ],
      description:
        "Stay light on your feet with the men's Gregory Paragon 58 pack. An adjustable FreeFloat dynamic suspension moves with your body so you stay balanced across steep traverses and through slot canyons.",
      price: "$229.95",
      type: "Expedition",
    },
    {
      name: "MYSTERY RANCH Glacier Pack - Men's",
      imgURL:[
        "https://www.rei.com/media/ac4970bb-35cc-4681-981c-8ae249f6bd54?size=784x588",
        "https://www.mysteryranch.com/Product%20Images%20-%20NEW/WS19%20Glacier_galaxy-(Body%20Panel)-2010.jpg?resizeid=5&resizeh=1200&resizew=1200",
        "https://www.mysteryranch.com/Product%20Images%20-%20NEW/WS19%20Glacier_galaxy-(Side%20Zip%20Access)-2050.jpg?resizeid=5&resizeh=1200&resizew=1200"
      ],
      description:
        "Hauling your essentials plus some creature comforts on weekend treks or week-long missions, the men's MYSTERY RANCH Glacier pack has a detachable lid that becomes a hip pack for day trips.",
      price: "$350.00",
      type: "Expedition",
    },
    {
      name: "Mountain Hardwear AMG 105 Pack",
      imgURL:[
        "https://www.rei.com/media/5e139eb9-b388-4871-b9bc-821e592a79fa?size=784x588",
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1882251_675_a1?wid=768&hei=806",
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1882251_675_a3?wid=768&hei=806"
      ],
      description:
        "Designed for mountaineering, the heavy-duty yet lightweight Mountain Hardwear AMG 105 pack can hold huge amounts of gear. It stands up to the toughest terrain while keeping your load maneuverable.",
      price: "$420.00",
      type: "Expedition",
    },
    {
      name: "Timbuk2 Launch Pack",
      imgURL:[
        "https://www.rei.com/media/71f5b953-68df-478e-b51f-ddaa0b91a5af?size=784x588",
        "https://www.rei.com/media/10970520-b7b2-4f85-9b65-ed5f136b164c?size=784x588",
        "https://www.rei.com/media/5ab297ae-b721-46e4-b947-5a6990feff29?size=784x588"
      ],
      description:
        "Fly down the pedestrian path with the Timbuk2 Launch pack on your back. At a mere 1 lb. 5 oz., this flyweight Tyvek® hauler carries a 13 in. laptop, jacket and whatever else the workday demands.",
      price: "$129.00",
      type: "Day-Trip",
    },
  ];

  await Product.insertMany(products);
  console.log("Created products!");
};
const run = async () => {
  await main();
  db.close();
};

run();
