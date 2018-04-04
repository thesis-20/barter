import db from './index';

export const bulkPost = async () => {
  try {
    await db.queryAsync(`
      INSERT INTO posts (title, description, condition, location, demand, user_id, watch_count, view_count, offer_count, status, main_photo, category) 
      VALUES
        ('Call of Duty WW2', 'PS4 Game CoD WW2', 'New (never used)', '6904 La Tijera Blvd, Los Angeles, CA 90045', 'Anything but Kryptonite', 1, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/6JMue-HEPTLOBgOw_3N6mhwxKyE=/300x400/594a/594ad2af9dfb4f9384f831a6f315b06f.jpg', '1'),
        ('Cake Set', 'putting my michelle cakeset up for trades', 'Open Box (never used)', '5908 W Manchester Ave, Los Angeles, CA 90045', 'Kryptonite', 1, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/3FYV7YOkupOxed8BqBLQQTFD_hY=/300x224/5e72/5e72dba4c035423986e87dd6e79b54c5.jpg', '4'),
        ('Kobe Bryan Jersey', 'Kobe jersey, Ive only lightly used it', 'For Parts', '5015 W Slauson Ave, Los Angeles, CA 90056', 'Laker tickets', 1, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/LgnkqS6LotnZGbYnYl3zXot1Fb8=/300x400/5537/55377b243503498bbb38450cefc331d4.jpg', '6'),
        ('Iphone 8', 'iPhone 8 gold w/ case and screen', 'Reconditioned/Certified', '5223 W Century Blvd, Los Angeles, CA 90045', 'Supreme Fanny Pack', 2, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/DS4i1KCgeLPEV5QTppnih6vaJNM=/300x400/dafd/dafd413b7bb14b6b94c0d4c48b42a52a.jpg', '2'),
        ('Leather Chair', 'good condition chair, get at it', 'Reconditioned/Certified', '10623 Venice Blvd, Los Angeles, CA 90034', 'Adidas Ultra Boost', 2, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/dsYwkNbQXW3nEjyghu-JwW7_iXU=/300x224/0261/0261b4ff7de346d38ec641744dc9202a.jpg', '4'),
        ('Dia de los Muerto Teddy', 'awesome little teddy bear for my mehican frends', 'New (never used)', '3602 South La Brea Ave, Los Angeles, CA 90016', 'Tesla Model 3', 2, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/viH2oTHvxbNzyXQoasj9hFpfW88=/300x400/2dac/2dac8af0226d4fe4bddbdd57d5e334e9.jpg', '7'),
        ('BMW 5 series headlight', 'in perfect working condition from a salvage', 'Reconditioned/Certified', '3501 S La Cienega Blvd, Los Angeles, CA 90016', 'Vitamin D pills', 2, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/iKxKO1btXtl9RZmnAVrsXJGrrb8=/300x400/1037/1037afed6f364a948708e27445737da0.jpg', '10'),
        ('Tires', 'various size tires, starting at 39 ea.', 'Used (normal wear)', '7123 Crenshaw Blvd, Los Angeles, CA 90043', 'MacBook Pro', 3, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/zTLZHsf6b9BQfgn73gwZkH1lS7M=/300x275/ce2b/ce2b2ebc90f54be0a986965123aa0331.jpg', '11'),
        ('Desk', 'Old study desk', 'Reconditioned/Certified', '1900 W Slauson Ave, Los Angeles, CA 90062', '24 pack of Bud Light', 3, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/_ODzlqH9d0P7TrrAkT-M4RoaGjY=/300x224/894e/894e58bf3dcb4fd1a30e877054dda9c5.jpg', '12'),
        ('Books for kids', 'various kid books', 'For Parts', '11300 National Blvd, Los Angeles, CA 90064', 'Nintendo Switch', 3, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/oIH4ip5GEJHjT8HgSaVaFdZqdlE=/300x307/47b1/47b1d531621049b09df7f3af4490c7ac.jpg', '13'),
        ('Emergency Kit', 'help keep you and your family safe with this much needed emergency kit', 'New (never used)', '2838 Crenshaw Blvd, Los Angeles, CA 90016', 'Fur Coat', 3, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/pdjfYkveW7zOglZkW2zDHK6hF7Q=/300x533/f624/f62470c2d9ea4341b53e7d445666107c.jpg', '15'),
        ('Cadillac', 'Old cadillac, ride in style and pick up gurls', 'Open Box (never used)', '1845 S La Cienega Blvd, Los Angeles, CA 90035', 'Plutonium', 1, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/YUkG_yJFt7ANT8HFrSm2oVVJfSE=/300x225/df96/df96e940b354401aa4a29fd22b913a22.jpg', '14'),
        ('Black Fixie Bicycle', 'comes with a lock and key', 'For Parts', '4680 Lincoln Blvd, Los Angeles, CA 90292', 'PlayStation 4', 1, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/IF5eguFpXRW8emEn-U_3zTsf_7E=/300x224/93bf/93bff38d03644c68861565fd2cddfe4b.jpg', '2'),
        ('Lawn Mower', 'old faithful can trim any push or field you need bare', 'Reconditioned/Certified', '4680 Lincoln Blvd, Los Angeles, CA 90292', 'iPhone X', 1, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/Bd4ElKHO_o72MiuOpTJ4ZPLllfQ=/300x400/0ffc/0ffca019516e4fe28c56241daae0af01.jpg', '1'),
        ('Phillips Sonicare', 'I promise this is unused, its safe', 'Reconditioned/Certified', '10611 W Pico Blvd, Los Angeles, CA 90064', 'The Karate Kid on VHS', 1, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/NnzZrza32xqx39W_9jf3GGjWsiU=/300x486/5f1b/5f1b8bd4ff68473f95172afb4c755f3d.jpg', '3'),
        ('Home Decor', 'who wouldnt want this lil guy sleeping and spying no you? get it now', 'Used (normal wear)', '5930 W Pico Blvd, Los Angeles, CA 90035', 'Batmobile', 1, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/NBzeQmaDGsacKQPRnmHYSlOJKy0=/300x225/3fd2/3fd240a9bf014c9cbca45f6e054755f9.jpg', '9'),
        ('Digital Clock', 'all features work', 'Other (see description)', '1406 W Manchester Ave, Los Angeles, CA 90047', 'Cheetos', 1, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/xM30VyVjaa3rhXurH2v2926zvNU=/300x533/b96e/b96e53884017447a8fb8c724284f0254.jpg', '8'),
        ('Table Saw', 'circular table saw to cut anything you need... cut', 'For Parts', '3939 Crenshaw Blvd, Los Angeles, CA 90008', 'Ugg boots', 1, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/IGXa49m8xl_k4hUIcHqJ3lJfwPI=/300x400/4870/487069ed3baf4c6a891aaf30d5b59eaf.jpg', '2'),
        ('Cups', 'Great gift fo those special women in yo life', 'Open Box (never used)', '2665 Main St, Santa Monica, CA 90405', 'High School Musical DVD', 1, 0, 0, 0, 'Accepting Offers','https://d2j6tswx2otu6e.cloudfront.net/SLA6kojBb1I-LAwuEY_N7zVUdQg=/300x441/f674/f674959e83494f668561a3274e6773f3.jpg', '3'),
        ('Pogo Stick', 'You can get mad air with this thing, i promise', 'New (never used)', '1 N Santa Fe Ave, Los Angeles, CA 90012', 'Beats by Dre', 1, 0, 0, 0, 'Accepting Offers', 'https://d2j6tswx2otu6e.cloudfront.net/X_wPeGa-wHOZSgc9442GVoIgc0M=/300x400/24d2/24d23a70fb6c4776a74bd2c760119be5.jpg', '8')
      `);
    console.log('successfully add seed data (posts)');
  } catch (err) {
    console.log('error adding seed data (posts)', err);
  }
};

export const bulkCategories = async () => {
  try {
    await db.queryAsync(`
      INSERT INTO categorys (type) 
      VALUES
        ('Antiques & Collectibles'),
        ('Appliances & Furniture'),
        ('Baby & Kids'),
        ('Beauty & Health'),
        ('Automotive'),
        ('Electronics, Computers & Office'),
        ('Clothing & Shoes'),
        ('Free'),
        ('Games & Toys'),
        ('Home, Garden & Tools'),
        ('Jewelry & Accessories'),
        ('Musical Instruments'),
        ('Pet Supplies'),
        ('Sports & Outdoors'),
        ('Tickets')
      `);
    console.log('successfully add seed data (categories)');
  } catch (err) {
    console.log('error adding seed data (categories)', err);
  }
};

export const bulkPhotos = async () => {
  try {
    await db.queryAsync(`
      INSERT INTO photos (post_id, url) 
      VALUES
        (1, '{"original":"https://vignette.wikia.nocookie.net/superman/images/b/b1/Superman_Action_976_Gary_Frank.png/revision/latest/scale-to-width-down/288?cb=20170501140424","thumbnail":"https://vignette.wikia.nocookie.net/superman/images/b/b1/Superman_Action_976_Gary_Frank.png/revision/latest/scale-to-width-down/288?cb=20170501140424"}'),
      (2,'{"original":"https://www.planwallpaper.com/static/images/4058802-6025115082-31152.jpg","thumbnail":"https://www.planwallpaper.com/static/images/4058802-6025115082-31152.jpg"}'),
      (3,'{"original":"http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png","thumbnail":"http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png"}'),
      (4,'{"original":"http://www.freepngimg.com/download/pokemon/11-2-pokemon-png.png","thumbnail":"http://www.freepngimg.com/download/pokemon/11-2-pokemon-png.png"}'),
      (5,'{"original":"http://bdfjade.com/data/out/126/6290093-imagenes-de-pokemon.png","thumbnail":"http://bdfjade.com/data/out/126/6290093-imagenes-de-pokemon.png"}'),
      (6,'{"original":"https://orig00.deviantart.net/4bd7/f/2017/099/2/1/main_qimg_76479dd91dc55c2768ddccfc30a4fbf5_by_mr_nooblette-db59lpi.png","thumbnail":"https://orig00.deviantart.net/4bd7/f/2017/099/2/1/main_qimg_76479dd91dc55c2768ddccfc30a4fbf5_by_mr_nooblette-db59lpi.png"}'),
      (7,'{"original":"https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png","thumbnail":"https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png"}'),
      (8,'{"original":"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/cf/Finn.png/revision/latest?cb=20121022153101","thumbnail":"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/cf/Finn.png/revision/latest?cb=20121022153101"}'),
      (9,'{"original":"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest?cb=20160503014517","thumbnail":"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest?cb=20160503014517"}'),
      (10,'{"original":"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/4/46/Bmo-0.png/revision/latest?cb=20150322022558","thumbnail":"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/4/46/Bmo-0.png/revision/latest?cb=20150322022558"}'),
      (11,'{"original":"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest?cb=20160405041324","thumbnail":"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest?cb=20160405041324"}'),
      (12,'{"original":"https://vignette.wikia.nocookie.net/rickandmorty/images/d/dd/Rick.png/revision/latest?cb=20131230003659","thumbnail":"https://vignette.wikia.nocookie.net/rickandmorty/images/d/dd/Rick.png/revision/latest?cb=20131230003659"}'),
      (13,'{"original":"https://pbs.twimg.com/profile_images/693986726058917888/piI-BFuY_400x400.jpg","thumbnail":"https://pbs.twimg.com/profile_images/693986726058917888/piI-BFuY_400x400.jpg"}'),
      (14,'{"original":"https://vignette.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20160923151111","thumbnail":"https://vignette.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20160923151111"}'),
      (15,'{"original":"https://vignette.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png/revision/latest?cb=20170725131924","thumbnail":"https://vignette.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png/revision/latest?cb=20170725131924"}'),
      (16,'{"original":"https://vignette.wikia.nocookie.net/southpark/images/1/1c/Mysterion_2.png/revision/latest?cb=20171107042555","thumbnail":"https://vignette.wikia.nocookie.net/southpark/images/1/1c/Mysterion_2.png/revision/latest?cb=20171107042555"}'),
      (17,'{"original":"https://tribzap2it.files.wordpress.com/2016/10/south-park-eric-cartman-11.jpg?w=1400","thumbnail":"https://tribzap2it.files.wordpress.com/2016/10/south-park-eric-cartman-11.jpg?w=1400"}'),
      (18,'{"original":"https://upload.wikimedia.org/wikipedia/en/0/06/ButtersStotch.png","thumbnail":"https://upload.wikimedia.org/wikipedia/en/0/06/ButtersStotch.png"}'),
      (19,'{"original":"https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502","thumbnail":"https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502"}'),
      (20,'{"original":"https://vignette.wikia.nocookie.net/southpark/images/6/63/Jimmy_valmer_here.png/revision/latest?cb=20170815180902","thumbnail":"https://vignette.wikia.nocookie.net/southpark/images/6/63/Jimmy_valmer_here.png/revision/latest?cb=20170815180902"}')
      `);
    console.log('successfully add seed data (photos)');
  } catch (err) {
    console.log('error adding seed data (photos)', err);
  }
};
