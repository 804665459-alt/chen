import { CategoryType, Product, Order, OrderStatus } from './types';

// Category translations and mapping
export const CATEGORY_LABELS: Record<CategoryType, string> = {
  [CategoryType.ARTIST_TOY]: 'อาร์ตทอย',
  [CategoryType.TRADING_CARD]: 'การ์ดสะสม',
  [CategoryType.MOVIE_MERCH]: 'สินค้าภาพยนตร์',
  [CategoryType.GAME_MERCH]: 'สินค้าเกม',
  [CategoryType.DOLL_CLOTHES]: 'ชุดตุ๊กตา',
  [CategoryType.PAPER_MODEL]: 'โมเดลกระดาษ',
};

// Helper to generate IDs
const generateProducts = () => {
  const products: Product[] = [
    // --- Artist Toys (10 items) ---
    {
      id: 'at-1',
      title: 'Labubu Macaron Secret',
      category: CategoryType.ARTIST_TOY,
      pricePerDay: 350,
      imageUrl: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?w=400&q=80',
      isPopular: true,
      description: 'ตุ๊กตา Labubu รุ่น Macaron Secret หายากมาก ขนนุ่ม เหมาะสำหรับพาไปคาเฟ่'
    },
    {
      id: 'at-2',
      title: 'Crybaby Sad Club',
      category: CategoryType.ARTIST_TOY,
      pricePerDay: 200,
      imageUrl: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=400&q=80',
      description: 'Crybaby คอลเลกชัน Sad Club พร้อมพร็อพทิชชู่สุดน่ารัก'
    },
    {
      id: 'at-3',
      title: 'Molly Space 400%',
      category: CategoryType.ARTIST_TOY,
      pricePerDay: 500,
      imageUrl: 'https://images.unsplash.com/photo-1566576912906-253c7a38914c?w=400&q=80',
      isPopular: true,
      description: 'Molly Space ขนาด 400% ลาย Watermelon สวยสะดุดตา'
    },
    {
      id: 'at-4',
      title: 'Hirono Little Mischief',
      category: CategoryType.ARTIST_TOY,
      pricePerDay: 150,
      imageUrl: 'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?w=400&q=80',
      description: 'Hirono เวอร์ชั่น Little Mischief สื่ออารมณ์เหงาๆ'
    },
    {
      id: 'at-5',
      title: 'Skullpanda Ancient Castle',
      category: CategoryType.ARTIST_TOY,
      pricePerDay: 180,
      imageUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&q=80',
      description: 'Skullpanda ธีมปราสาทโบราณ ดีเทลละเอียดสวยงาม'
    },
    {
      id: 'at-6',
      title: 'Dimoo Aquarium',
      category: CategoryType.ARTIST_TOY,
      pricePerDay: 160,
      imageUrl: 'https://images.unsplash.com/photo-1544654271-9f936166e448?w=400&q=80',
      description: 'Dimoo คอลเลกชันโลกใต้น้ำ สดใส น่าสะสม'
    },
    {
      id: 'at-7',
      title: 'Farmer Bob Pixel',
      category: CategoryType.ARTIST_TOY,
      pricePerDay: 250,
      imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&q=80',
      description: 'Farmer Bob ลาย Pixel สุดเท่ ไม่ซ้ำใคร'
    },
    {
      id: 'at-8',
      title: 'Pucky Forest Party',
      category: CategoryType.ARTIST_TOY,
      pricePerDay: 140,
      imageUrl: 'https://images.unsplash.com/photo-1535581652167-3d6b98c39327?w=400&q=80',
      description: 'Pucky ธีมปาร์ตี้ในป่า แฟนตาซีสุดๆ'
    },
    {
      id: 'at-9',
      title: 'Nyota Fluffy Life',
      category: CategoryType.ARTIST_TOY,
      pricePerDay: 150,
      imageUrl: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=400&q=80',
      description: 'Nyota ชีวิตนุ่มฟู น่ารักน่ากอด'
    },
    {
      id: 'at-10',
      title: 'Zimomo Original',
      category: CategoryType.ARTIST_TOY,
      pricePerDay: 400,
      imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80',
      isPopular: true,
      description: 'Zimomo ตัวใหญ่ ขนฟู ต้นฉบับหายาก'
    },

    // --- Trading Cards (10 items) ---
    {
      id: 'tc-1',
      title: 'Pokemon Charizard VMAX',
      category: CategoryType.TRADING_CARD,
      pricePerDay: 500,
      imageUrl: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=400&q=80',
      isPopular: true,
      description: 'การ์ด Pokemon Charizard VMAX Shiny สภาพ PSA 10'
    },
    {
      id: 'tc-2',
      title: 'Blue-Eyes White Dragon',
      category: CategoryType.TRADING_CARD,
      pricePerDay: 450,
      imageUrl: 'https://images.unsplash.com/photo-1622646696347-190b213c4c94?w=400&q=80',
      description: 'Yu-Gi-Oh! Blue-Eyes White Dragon 1st Edition'
    },
    {
      id: 'tc-3',
      title: 'One Piece Luffy Manga Rare',
      category: CategoryType.TRADING_CARD,
      pricePerDay: 600,
      imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5f0b7ac5d?w=400&q=80',
      isPopular: true,
      description: 'การ์ด One Piece Luffy Gear 5 Manga Rare'
    },
    {
      id: 'tc-4',
      title: 'Magic The Gathering Black Lotus',
      category: CategoryType.TRADING_CARD,
      pricePerDay: 2000,
      imageUrl: 'https://images.unsplash.com/photo-1626071466175-685b54200652?w=400&q=80',
      description: 'การ์ดในตำนาน Black Lotus (Proxy สำหรับโชว์)'
    },
    {
      id: 'tc-5',
      title: 'Pokemon Pikachu Illustrator',
      category: CategoryType.TRADING_CARD,
      pricePerDay: 1500,
      imageUrl: 'https://images.unsplash.com/photo-1639739454641-525964205510?w=400&q=80',
      description: 'Pikachu Illustrator Replica งานเกรดพรีเมียม'
    },
    {
      id: 'tc-6',
      title: 'NBA Michael Jordan Rookie',
      category: CategoryType.TRADING_CARD,
      pricePerDay: 800,
      imageUrl: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=400&q=80',
      description: 'การ์ดบาส NBA Michael Jordan Rookie ปี 1986'
    },
    {
      id: 'tc-7',
      title: 'Dragon Ball Z Goku SSR',
      category: CategoryType.TRADING_CARD,
      pricePerDay: 300,
      imageUrl: 'https://images.unsplash.com/photo-1542308728-6e545084993a?w=400&q=80',
      description: 'การ์ด Dragon Ball Z Goku ร่าง Super Saiyan ระดับ SSR'
    },
    {
      id: 'tc-8',
      title: 'Pokemon Umbreon VMAX Alt Art',
      category: CategoryType.TRADING_CARD,
      pricePerDay: 400,
      imageUrl: 'https://images.unsplash.com/photo-1629237628864-44b41b122040?w=400&q=80',
      description: 'Umbreon VMAX Alternate Art ลายพระจันทร์สวยมาก'
    },
    {
      id: 'tc-9',
      title: 'Flesh and Blood Rosetta',
      category: CategoryType.TRADING_CARD,
      pricePerDay: 250,
      imageUrl: 'https://images.unsplash.com/photo-1638848135899-2313d52b3149?w=400&q=80',
      description: 'การ์ด Flesh and Blood รุ่น Cold Foil'
    },
    {
      id: 'tc-10',
      title: 'Digimon Omegamon',
      category: CategoryType.TRADING_CARD,
      pricePerDay: 350,
      imageUrl: 'https://images.unsplash.com/photo-1593414946399-c896944b0253?w=400&q=80',
      description: 'Digimon Card Game Omegamon Parallel Art'
    },

    // --- Movie Merch (10 items) ---
    {
      id: 'mm-1',
      title: 'Iron Man Helmet MK5',
      category: CategoryType.MOVIE_MERCH,
      pricePerDay: 800,
      imageUrl: 'https://images.unsplash.com/photo-1626278664285-f796b96180af?w=400&q=80',
      isPopular: true,
      description: 'หมวก Iron Man MK5 สั่งงานด้วยเสียง เปิด-ปิดหน้ากากได้'
    },
    {
      id: 'mm-2',
      title: 'Harry Potter Wand',
      category: CategoryType.MOVIE_MERCH,
      pricePerDay: 200,
      imageUrl: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&q=80',
      description: 'ไม้กายสิทธิ์ Elder Wand งาน Official จาก Universal Studios'
    },
    {
      id: 'mm-3',
      title: 'Star Wars Lightsaber',
      category: CategoryType.MOVIE_MERCH,
      pricePerDay: 600,
      imageUrl: 'https://images.unsplash.com/photo-1541846540-3eb653c0d75a?w=400&q=80',
      isPopular: true,
      description: 'ดาบเลเซอร์ Lightsaber รุ่น Anakin Skywalker แสงเสียงสมจริง'
    },
    {
      id: 'mm-4',
      title: 'Captain America Shield',
      category: CategoryType.MOVIE_MERCH,
      pricePerDay: 700,
      imageUrl: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=400&q=80',
      description: 'โล่กัปตันอเมริกา โลหะ Diecast ขนาด 1:1'
    },
    {
      id: 'mm-5',
      title: 'Thanos Infinity Gauntlet',
      category: CategoryType.MOVIE_MERCH,
      pricePerDay: 750,
      imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80',
      description: 'ถุงมือธานอส Infinity Gauntlet ขยับนิ้วได้ มีไฟ LED'
    },
    {
      id: 'mm-6',
      title: 'Batman Batarang',
      category: CategoryType.MOVIE_MERCH,
      pricePerDay: 300,
      imageUrl: 'https://images.unsplash.com/photo-1531259683007-016a7b629feb?w=400&q=80',
      description: 'Batarang โลหะ งาน Prop Replica จากหนัง Batman Begins'
    },
    {
      id: 'mm-7',
      title: 'Lord of the Rings Ring',
      category: CategoryType.MOVIE_MERCH,
      pricePerDay: 150,
      imageUrl: 'https://images.unsplash.com/photo-1596541530756-3c79a92a54b3?w=400&q=80',
      description: 'แหวนเอกธำมรงค์ The One Ring พร้อมสร้อย'
    },
    {
      id: 'mm-8',
      title: 'Ghostbusters Trap',
      category: CategoryType.MOVIE_MERCH,
      pricePerDay: 450,
      imageUrl: 'https://images.unsplash.com/photo-1610443213508-41483849553b?w=400&q=80',
      description: 'กับดักผี Ghostbusters มีไฟและเสียงตอนเปิด'
    },
    {
      id: 'mm-9',
      title: 'Jurassic Park Cane',
      category: CategoryType.MOVIE_MERCH,
      pricePerDay: 400,
      imageUrl: 'https://images.unsplash.com/photo-1569420067287-2775bb9d0124?w=400&q=80',
      description: 'ไม้เท้า John Hammond หัวอำพันมียุงข้างใน'
    },
    {
      id: 'mm-10',
      title: 'Darth Vader Helmet',
      category: CategoryType.MOVIE_MERCH,
      pricePerDay: 900,
      imageUrl: 'https://images.unsplash.com/photo-1601382270348-185d9eb39343?w=400&q=80',
      description: 'หมวก Darth Vader รุ่น Black Series ใส่ได้จริง'
    },

    // --- Game Merch (10 items) ---
    {
      id: 'gm-1',
      title: 'Genshin Impact Vision',
      category: CategoryType.GAME_MERCH,
      pricePerDay: 100,
      imageUrl: 'https://images.unsplash.com/photo-1643485770024-e90f23789094?w=400&q=80',
      description: 'Vision เมือง Inazuma ไฟ LED สว่างชัดเจนสำหรับคอสเพลย์'
    },
    {
      id: 'gm-2',
      title: 'Mario Question Block Lamp',
      category: CategoryType.GAME_MERCH,
      pricePerDay: 120,
      imageUrl: 'https://images.unsplash.com/photo-1612404730960-5c71579fca11?w=400&q=80',
      description: 'โคมไฟกล่องคำถาม Mario กดแล้วมีเสียงเหรียญเด้ง'
    },
    {
      id: 'gm-3',
      title: 'Zelda Master Sword',
      category: CategoryType.GAME_MERCH,
      pricePerDay: 550,
      imageUrl: 'https://images.unsplash.com/photo-1592652426685-6e011fadd115?w=400&q=80',
      isPopular: true,
      description: 'ดาบ Master Sword จาก Zelda ขนาด 1:1 งานสวยมาก'
    },
    {
      id: 'gm-4',
      title: 'Minecraft Diamond Pickaxe',
      category: CategoryType.GAME_MERCH,
      pricePerDay: 150,
      imageUrl: 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?w=400&q=80',
      description: 'จอบเพชร Minecraft โฟมแข็ง ปลอดภัยสำหรับเด็ก'
    },
    {
      id: 'gm-5',
      title: 'Among Us Plushie',
      category: CategoryType.GAME_MERCH,
      pricePerDay: 80,
      imageUrl: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&q=80',
      description: 'ตุ๊กตา Among Us สีแดง ยอดนิยม'
    },
    {
      id: 'gm-6',
      title: 'Final Fantasy Buster Sword',
      category: CategoryType.GAME_MERCH,
      pricePerDay: 1000,
      imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&q=80',
      description: 'ดาบ Buster Sword ของ Cloud Strife ขนาดใหญ่ยักษ์'
    },
    {
      id: 'gm-7',
      title: 'Kingdom Hearts Keyblade',
      category: CategoryType.GAME_MERCH,
      pricePerDay: 500,
      imageUrl: 'https://images.unsplash.com/photo-1615822393392-1268fa3006d6?w=400&q=80',
      description: 'Keyblade Kingdom Key งานไม้ น้ำหนักเบา'
    },
    {
      id: 'gm-8',
      title: 'Overwatch D.Va Gun',
      category: CategoryType.GAME_MERCH,
      pricePerDay: 300,
      imageUrl: 'https://images.unsplash.com/photo-1559987817-495033455115?w=400&q=80',
      description: 'ปืน D.Va Light Gun มีไฟและเสียง ชาร์จ USB ได้'
    },
    {
      id: 'gm-9',
      title: 'Animal Crossing Tom Nook',
      category: CategoryType.GAME_MERCH,
      pricePerDay: 100,
      imageUrl: 'https://images.unsplash.com/photo-1605518216938-7f31b471844e?w=400&q=80',
      description: 'ตุ๊กตา Tom Nook ใส่ชุดฮาวาย น่ารักสุดๆ'
    },
    {
      id: 'gm-10',
      title: 'God of War Leviathan Axe',
      category: CategoryType.GAME_MERCH,
      pricePerDay: 600,
      imageUrl: 'https://images.unsplash.com/photo-1580234550995-2f483258c708?w=400&q=80',
      description: 'ขวาน Leviathan Axe งานโฟมยาง รายละเอียดสูง'
    },

    // --- Doll Clothes (10 items) ---
    {
      id: 'dc-1',
      title: 'Blythe Doll Dress Set',
      category: CategoryType.DOLL_CLOTHES,
      pricePerDay: 120,
      imageUrl: 'https://images.unsplash.com/photo-1581556839353-847d0e413008?w=400&q=80',
      description: 'ชุดเดรสลูกไม้แฮนด์เมดสำหรับน้อง Blythe พร้อมหมวก'
    },
    {
      id: 'dc-2',
      title: 'BJD Kimono Set',
      category: CategoryType.DOLL_CLOTHES,
      pricePerDay: 150,
      imageUrl: 'https://images.unsplash.com/photo-1586522501759-3224b172da77?w=400&q=80',
      description: 'ชุดกิโมโนญี่ปุ่นสำหรับตุ๊กตา BJD ขนาด 1/3'
    },
    {
      id: 'dc-3',
      title: 'Barbie Fashionista Pack',
      category: CategoryType.DOLL_CLOTHES,
      pricePerDay: 80,
      imageUrl: 'https://images.unsplash.com/photo-1549896791-766b26d36b80?w=400&q=80',
      description: 'เซตเสื้อผ้า Barbie 5 ชุด คละแบบ ใส่เที่ยวได้ทุกงาน'
    },
    {
      id: 'dc-4',
      title: 'Nendoroid Doll Suit',
      category: CategoryType.DOLL_CLOTHES,
      pricePerDay: 90,
      imageUrl: 'https://images.unsplash.com/photo-1627448375497-8888065a3d42?w=400&q=80',
      description: 'ชุดสูททักซิโด้สำหรับ Nendoroid Doll เท่มากๆ'
    },
    {
      id: 'dc-5',
      title: 'Labubu Custom Hoodie',
      category: CategoryType.DOLL_CLOTHES,
      pricePerDay: 70,
      imageUrl: 'https://images.unsplash.com/photo-1626017056247-a36c561b3272?w=400&q=80',
      description: 'เสื้อฮู้ดไหมพรมถักมือสำหรับใส่ Labubu Macaron'
    },
    {
      id: 'dc-6',
      title: 'Disney Animator Dress',
      category: CategoryType.DOLL_CLOTHES,
      pricePerDay: 110,
      imageUrl: 'https://images.unsplash.com/photo-1543857770-5243b7cf25c8?w=400&q=80',
      description: 'ชุดเจ้าหญิงสำหรับตุ๊กตา Disney Animator'
    },
    {
      id: 'dc-7',
      title: 'Pullip Gothic Lolita',
      category: CategoryType.DOLL_CLOTHES,
      pricePerDay: 130,
      imageUrl: 'https://images.unsplash.com/photo-1496924294817-27b2f483c74e?w=400&q=80',
      description: 'ชุดโกธิคโลลิต้าสีดำแดง สำหรับตุ๊กตา Pullip'
    },
    {
      id: 'dc-8',
      title: 'Obitsu 11 Casual Set',
      category: CategoryType.DOLL_CLOTHES,
      pricePerDay: 60,
      imageUrl: 'https://images.unsplash.com/photo-1626017056247-a36c561b3272?w=400&q=80',
      description: 'ชุดลำลอง เสื้อยืดกางเกงยีนส์ สำหรับ Obitsu 11'
    },
    {
      id: 'dc-9',
      title: 'Pop Mart Molly Raincoat',
      category: CategoryType.DOLL_CLOTHES,
      pricePerDay: 75,
      imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80',
      description: 'ชุดกันฝนจิ๋วสีเหลืองสดใส สำหรับ Molly 400%'
    },
    {
      id: 'dc-10',
      title: 'Smart Doll School Uniform',
      category: CategoryType.DOLL_CLOTHES,
      pricePerDay: 140,
      imageUrl: 'https://images.unsplash.com/photo-1502003194090-348f072485fa?w=400&q=80',
      description: 'ชุดนักเรียนญี่ปุ่นงานละเอียด สำหรับ Smart Doll'
    },

    // --- Paper Models (10 items) ---
    {
      id: 'pm-1',
      title: 'Gundam RX-78-2 Papercraft',
      category: CategoryType.PAPER_MODEL,
      pricePerDay: 50,
      imageUrl: 'https://images.unsplash.com/photo-1616428787723-d3a95c808f97?w=400&q=80',
      description: 'โมเดลกระดาษ Gundam ประกอบเสร็จ ตั้งโชว์สวย'
    },
    {
      id: 'pm-2',
      title: 'Hogwarts Castle Paper 3D',
      category: CategoryType.PAPER_MODEL,
      pricePerDay: 80,
      imageUrl: 'https://images.unsplash.com/photo-1598929438701-ef29ab0bb616?w=400&q=80',
      description: 'ปราสาทฮอกวอตส์กระดาษ 3 มิติ รายละเอียดครบ'
    },
    {
      id: 'pm-3',
      title: 'Titanic Ship Paper Model',
      category: CategoryType.PAPER_MODEL,
      pricePerDay: 70,
      imageUrl: 'https://images.unsplash.com/photo-1569420067287-2775bb9d0124?w=400&q=80',
      description: 'เรือไททานิคกระดาษ ยาว 50 ซม.'
    },
    {
      id: 'pm-4',
      title: 'Eiffel Tower Papercraft',
      category: CategoryType.PAPER_MODEL,
      pricePerDay: 40,
      imageUrl: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce7859?w=400&q=80',
      description: 'หอไอเฟลกระดาษ สูง 30 ซม. ตกแต่งห้องสวย'
    },
    {
      id: 'pm-5',
      title: 'Pokemon Papercraft Set',
      category: CategoryType.PAPER_MODEL,
      pricePerDay: 60,
      imageUrl: 'https://images.unsplash.com/photo-1613771404721-c5b01368a495?w=400&q=80',
      description: 'เซตโปเกมอนกระดาษ 5 ตัว (Pikachu, Charmander, etc.)'
    },
    {
      id: 'pm-6',
      title: 'Star Wars X-Wing Paper',
      category: CategoryType.PAPER_MODEL,
      pricePerDay: 55,
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
      description: 'ยาน X-Wing กระดาษ แขวนเพดานได้'
    },
    {
      id: 'pm-7',
      title: 'Totoro Paper Theatre',
      category: CategoryType.PAPER_MODEL,
      pricePerDay: 90,
      imageUrl: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?w=400&q=80',
      description: 'ฉากกระดาษ Paper Theatre เรื่อง My Neighbor Totoro'
    },
    {
      id: 'pm-8',
      title: 'Thousand Sunny Paper Ship',
      category: CategoryType.PAPER_MODEL,
      pricePerDay: 85,
      imageUrl: 'https://images.unsplash.com/photo-1544654271-9f936166e448?w=400&q=80',
      description: 'เรือ Thousand Sunny กระดาษ งานละเอียด'
    },
    {
      id: 'pm-9',
      title: 'Iron Man Mask Papercraft',
      category: CategoryType.PAPER_MODEL,
      pricePerDay: 45,
      imageUrl: 'https://images.unsplash.com/photo-1626278664285-f796b96180af?w=400&q=80',
      description: 'หน้ากาก Iron Man กระดาษแข็ง สวมหัวได้'
    },
    {
      id: 'pm-10',
      title: 'Japanese Shrine Paper Model',
      category: CategoryType.PAPER_MODEL,
      pricePerDay: 65,
      imageUrl: 'https://images.unsplash.com/photo-1524312672582-74d320b9231f?w=400&q=80',
      description: 'ศาลเจ้าญี่ปุ่นกระดาษ สไตล์มินิมอล'
    }
  ];
  return products;
};

export const MOCK_PRODUCTS: Product[] = generateProducts();

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    productId: 'at-1',
    productTitle: 'Labubu Macaron Secret',
    productImage: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?w=400&q=80',
    startDate: '2023-10-01',
    endDate: '2023-10-03',
    totalPrice: 1050,
    status: OrderStatus.COMPLETED
  },
  {
    id: 'ORD-002',
    productId: 'mm-1',
    productTitle: 'Iron Man Helmet MK5',
    productImage: 'https://images.unsplash.com/photo-1626278664285-f796b96180af?w=400&q=80',
    startDate: '2023-10-25',
    endDate: '2023-10-26',
    totalPrice: 800,
    status: OrderStatus.ACTIVE
  }
];
