const Hotels=require("../Database/Hotels");
const connectDatabase=require("../Database/index");

   let hotels= [
      {
        "id": 1,
        "hotel_name": "2BR Village Apartment near Golf, College, Weddings",
        "city": "Delhi",
        "hotel_img": ["https://media.vrbo.com/lodging/39000000/38800000/38792200/38792160/8b77aa30.f10.jpg",
         "https://media.vrbo.com/lodging/39000000/38800000/38792200/38792160/8c7041ea.f10.jpg",
        "https://media.vrbo.com/lodging/39000000/38800000/38792200/38792160/becb036c.f6.jpg",
        "https://media.vrbo.com/lodging/39000000/38800000/38792200/38792160/23a1e322.f6.jpg",
        "https://media.vrbo.com/lodging/39000000/38800000/38792200/38792160/8cea2a02.f6.jpg"],
        "ratings": 2,
        "price": "$128/night",
        "price_op": 128,
        "des": "Our home offers two king beds, a queen bed, and a sofa that converts into a super comfy queen bed in a private space. All mattresses are new 14' memory foam and we offer an assortment of pillows from firm to soft. There is a fully-loaded chef's kitchen with everything needed to cook a gourmet meal we also have a full-size Webber gas grill that is perfect for grilling for a large group."
      },
      {
        "id": 2,
        "hotel_name": "Victorian Ski House W/HotTub 30 Mins to Plattekill, Sleeps 8 Adults",
        "city": "Delhi",
        "hotel_img": ["https://media.vrbo.com/lodging/65000000/64720000/64718900/64718888/8cf8dfac.f10.jpg",
        "https://media.vrbo.com/lodging/67000000/66500000/66499400/66499376/9d952f8f.f10.jpg",
        "https://media.vrbo.com/lodging/67000000/66500000/66499400/66499376/36ee7c54.f10.jpg",
         "https://media.vrbo.com/lodging/67000000/66500000/66499400/66499376/f11c13be.f6.jpg",
         "https://media.vrbo.com/lodging/67000000/66500000/66499400/66499376/ee396993.f6.jpg"],
        "ratings": 3,
        "price": "$322/night",
        "price_op": 322,
        "des": "Take in the peace and quiet of the Catskills countryside at this 4-bedroom, 1.5-bathroom Delhi home. Listen to the nearby Delaware River from the private deck with a cup of coffee in hand. Spend your days hiking in Mine Kill State Park or another nearby trail. After some fresh air, grab a drink at a local brewery and soak in the small-town charm. Stop by Humdinger Farm Store for a farm-to-table dinner that you can cook in the kitchen or grill on the deck while you watch the sun go down."
      },
      {
        "id": 3,
        "hotel_name": "NEW! Riverfront Delhi Family Retreat w/ Game Room",
        "city": "Delhi",
        "hotel_img": ["https://media.vrbo.com/lodging/72000000/71750000/71748100/71748067/ea3dfaba.f10.jpg",
         "https://media.vrbo.com/lodging/39000000/38790000/38784300/38784240/97c0a321.f10.jpg",
         "https://media.vrbo.com/lodging/39000000/38790000/38784300/38784240/678f9c20.f6.jpg",
        "https://media.vrbo.com/lodging/39000000/38790000/38784300/38784240/868b066f.f6.jpg",
         "https://media.vrbo.com/lodging/39000000/38790000/38784300/38784240/1c6e9ac7.f6.jpg"],
        "ratings": 3,
        "price": "$316/night",
        "price_op": 316,
        "des": "Unwind by the tranquil waters at this lush 3-bedroom, 2.5-bathroom Delhi vacation rental. This well-appointed house boasts a river deck, balcony, wood-burning stove, and a game room overlooking the river! Warm up on the outdoor swing by the mini chiminea, cue up at the pool table, or build a tasteful charcuterie board in the fully equipped kitchen. Hit the slopes at Plattekill Mountain or float on Gilbert Lake State Park; this home is ideally located about 1 mile to SUNY Delhi and eateries."
      },
      {
        "id": 4,
        "hotel_name": "NEW! Peaceful Riverside Catskills Abode w/ Deck!",
        "city": "Delhi",
        "hotel_img": ["https://media.vrbo.com/lodging/72000000/71420000/71410600/71410523/6af3ec9f.f10.jpg",
        "https://media.vrbo.com/lodging/67000000/66500000/66498900/66498890/0b4dae18.f10.jpg",
         "https://media.vrbo.com/lodging/67000000/66500000/66498900/66498890/3e70f35d.f10.jpg",
        "https://media.vrbo.com/lodging/67000000/66500000/66498900/66498890/eddf78f2.f6.jpg",
        "https://media.vrbo.com/lodging/67000000/66500000/66498900/66498890/51aafc2b.f6.jpg" ],
        "ratings": 1,
        "price": "$211/night",
        "price_op": 211,
        "des": "The Doll House, a historic house is located in the Catskills in the Hamlet of Andes on a generous 1.5 acres close to downtown. The Majestic King Suite is on the 2nd floor-very private with a French door opening to a private balcony. The 450sq. ft. room has a high vaulted ceiling, hard wood floors, a king size bed with a luxury mattress, an electric fireplace. En suite bathroom has double vanity, separate shower stall and a 2-person jacuzzi tub. The outdoors offers beautifully landscaped gardens with multiple sitting areas on the bank of a mountainous bubbling creek."
      },
      {
        "id": 5,
        "hotel_name": "Majestic King Suite with Huge Bathroom",
        "city": "Delhi",
        "hotel_img": ["https://media.vrbo.com/lodging/67000000/66490000/66487700/66487646/9294301f.f10.jpg",
        "https://media.vrbo.com/lodging/37000000/36710000/36702000/36701920/e48ee638.f10.jpg",
        "https://media.vrbo.com/lodging/37000000/36710000/36702000/36701920/90-5d1bc4be.f6.jpg",
        "https://media.vrbo.com/lodging/37000000/36710000/36702000/36701920/7ec9c538.f6.jpg",
         "https://media.vrbo.com/lodging/37000000/36710000/36702000/36701920/694bf205.f6.jpg" ],
        "ratings": 5,
        "price": "$153/night",
        "price_op": 153,
        "des": "Enjoy this brand new authentic log cabin tucked into the woods for seclusion. There is a wonderful front porch to look out over the mostly level to gently sloped 10+/- acres. Inside, this custom-built 10' log home is an open great room with cathedral ceiling, a bedroom on the main level with an open loft bedroom above. The beautiful kitchen and bathroom are charming and constructed handsomely. The woodstove keeps the cabin cozy. The downstairs bedroom has a full size bed and the upstairs has a queen size bed. The property is on a private road with fishing and hunting opportunities nearby and is just under 3 hours from the GWB. We are centrally located between several ski slopes, including Hunter Mountain, Ski Windham, Plattekill and Bellayre mountains for the winter season. Or take in an Oneonta Tigers game during the summer, or swim and play at the local village pool / play ground. We're just 20 minutes from the Soccer Hall of Fame in Oneonta, and 30-40 minutes from the Baseball Hall of Fame in Cooperstown. Or if you want to just take in the country landscape there are an abundant number of nearby trails for hiking, running, cross-country skiing & snowmobiling. Plenty of convenient access to state land for all your hunting & fishing needs. Near by college's include Suny Delhi, Suny Oneonta, Suny Cobleskill, and Hartwick College."
      },
      {
        "id": 6,
        "hotel_name": "Romantic and secluded cottage",
        "city": "Delhi",
        "hotel_img":[ "https://media.vrbo.com/lodging/23000000/22210000/22207400/22207362/e53cc610.f10.jpg",
        "https://media.vrbo.com/lodging/23000000/22210000/22207400/22207362/3d1db007.f10.jpg",
         "https://media.vrbo.com/lodging/23000000/22210000/22207400/22207362/cdb31922.f6.jpg",
         "https://media.vrbo.com/lodging/23000000/22210000/22207400/22207362/576bf6a7.f6.jpg",
         "https://media.vrbo.com/lodging/23000000/22210000/22207400/22207362/4e89f80c.f6.jpg"],
        "ratings": 4,
        "price": "$130/night",
        "price_op": 130,
        "des": "Our goal is to make your stay as pleasant as possible. Your winter experience will be both safer and more enjoyable if you have a 4-wheel-drive vehicle with good winter tires. It will make driving on our property and local roads less stressful. Our half-mile private road can be challenging in winter, and 4WD is HIGHLY recommended. We want your visit to a great experience and the ability to travel our private road will go a long way towards your enjoyment. Thank you."
      },
      {
        "id": 7,
        "hotel_name": "~ Peaceful House in The Country ~ Privacy ~ Peaceful and Quiet ~ Nature ~",
        "city": "Delhi",
        "hotel_img": ["https://media.vrbo.com/lodging/31000000/30070000/30068700/30068673/961d56a6.f10.jpg",
         "https://media.vrbo.com/lodging/33000000/32440000/32432100/32432001/0141c959.f10.jpg",
         "https://media.vrbo.com/lodging/33000000/32440000/32432100/32432001/706daad2.f6.jpg",
         "https://media.vrbo.com/lodging/33000000/32440000/32432100/32432001/712657f5.f6.jpg",
        "https://media.vrbo.com/lodging/33000000/32440000/32432100/32432001/0b3bf8e0.f6.jpg"],
        "ratings": 5,
        "price": "$158/night",
        "price_op": 158,
        "des": "The property is exceptionally quiet, with all the comforts you will need for a vacation get away. A hiking trail begins directly by the property and leads through miles of DEP forests and meadows with stunning views and a swim pond surrounded by environmental protected land is just a 5 minute walk away. The only neighbors you can see is us, at the end of the road about 500 feet ( 2 football fields ) away from the cottage. Pets are welcome, perfect spot for dogs to run off their leash !"
      },
      {
        "id": 8,
        "hotel_name": "Pond, Stream and Dock next to the House!",
        "city": "Delhi",
        "hotel_img": ["https://media.vrbo.com/lodging/35000000/34780000/34776200/34776136/31f5b0e1.f10.jpg",
         "https://media.vrbo.com/lodging/19000000/18840000/18839800/18839752/095821ef.f10.jpg",
         "https://media.vrbo.com/lodging/19000000/18840000/18839800/18839752/5e27ec1e.f6.jpg",
        "https://media.vrbo.com/lodging/19000000/18840000/18839800/18839752/ac44d68c.f6.jpg",
         "https://media.vrbo.com/lodging/19000000/18840000/18839800/18839752/1575d3a6.f6.jpg"],
        "ratings": 2,
        "price": "$278/night",
        "price_op": 278,
        "des": "The private Eagle studio apartment has a queen bed, twin bed and a pull out twin bed - great for a group of 4 guests! The en suite bathroom has a one-person jacuzzi tub with a shower. The quests can use a full size refrigerator, stove and a full kitchen. The apartment is located on the 3rd floor and gives guests full privacy. The door has the lock. Full breakfast is offered at extra cost per person."
      },
      {
        "id": 9,
        "hotel_name": "Cozy cabin with great views and fire place!",
        "city": "Delhi",
        "hotel_img": ["https://media.vrbo.com/lodging/22000000/21340000/21336300/21336251/5f100ff3.f10.jpg",
         "https://media.vrbo.com/lodging/67000000/66490000/66487700/66487646/f2a30fb4.f10.jpg",
         "https://media.vrbo.com/lodging/67000000/66490000/66487700/66487646/10638d1a.f6.jpg",
         "https://media.vrbo.com/lodging/67000000/66490000/66487700/66487646/f1ad3f84.f6.jpg",
         "https://media.vrbo.com/lodging/67000000/66490000/66487700/66487646/03d117ee.f6.jpg"],
        "ratings": 2,
        "price": "$201/night",
        "price_op": 201,
        "des": "Welcome to the Doll House, a historic house in the Hamlet of Andes, in the heart of the Catskills mountains! It is a breathtaking area with bubbling creeks, autumn leaf display, cool summer evenings, winter skiing...any season has its attractions in this quaint American town."
      },
      {
        "id": 10,
        "hotel_name": "Cozy Country Farmhouse Along the Catskill Scenic Trail",
        "city": "Delhi",
        "hotel_img": ["https://media.vrbo.com/lodging/34000000/33510000/33502600/33502518/27598ae4.f10.jpg",
        "https://media.vrbo.com/lodging/72000000/71750000/71748100/71748067/6bcba81a.f10.jpg",
         "https://media.vrbo.com/lodging/72000000/71750000/71748100/71748067/645b6063.f6.jpg",
        "https://media.vrbo.com/lodging/72000000/71750000/71748100/71748067/180d4de1.f6.jpg",
         "https://media.vrbo.com/lodging/72000000/71750000/71748100/71748067/5a0eb42d.f6.jpg"],
        "ratings": 3,
        "price": "$149/night",
        "price_op": 149,
        "des": "The Shire Apartment has ample parking in the back of the building. A flight of stairs brings you to the apartment door and another flight of stairs to the private foyer. The apartment has been newly renovated with all new furnishings and appliances. Every detail has been covered to make sure that you entire visit is comfortable and enjoyable."
      }
    ]
  
async function HotelPopulate()
{
  for(var i=0;i<hotels.length;i++)
  {
    let hotelData={
      id:hotels[i].id,
      hotel_name:hotels[i].hotel_name,
      city:hotels[i].city,
      image:hotels[i].hotel_img,
      rating:hotels[i].ratings,
      price:hotels[i].price_op,
      description:hotels[i].des
    }
    await Hotels.create(hotelData);
  }
}


 connectDatabase()
 .then(()=>{
  HotelPopulate();
 })   

