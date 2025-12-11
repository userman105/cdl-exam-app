import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Question from "#models/question"

export default class questionsGeneralSeeder extends BaseSeeder {
  async run() {
    const englishQuestions = [
      "You are driving straight on a highway at 50 miles per hour, there are no vehicles in front of you, when suddenly a tire on your vehicle bursts: what should you do first?",
      "You are driving a vehicle with a manual transmission. Which gear should you use to drive down a hill?",
      "You are checking the wheels and tires for a pre-trip inspection. Which of the following statements is correct?",
      "You are checking the wheels and tires for a pre-trip inspection. Which of the following statements is correct?",
      "If a vehicle with no trailer or articulated vehicle attached to it skids on the front wheels, what will happen?",
      "If you want to leave the road for a traffic emergency, you must:",
      "Which of the following statements about certain types of cargo is correct?",
      "According to the driver's manual, why should you minimize the use of the horn?",
      "You do not have a permit to handle hazardous materials on your commercial driver's license, and you have been asked to deliver hazardous materials on a truck marked with a hazardous materials placard. What should you do?",
      "Which of the following statements about staying alert while driving is correct?",
      "Your truck has hydraulic brakes. While traveling on a level road, you press the brake pedal and find that it goes straight to the floor. Which of the following statements is true?",
      "You are driving at 55 mph on dry pavement. How far will it take for your vehicle to stop?",
      "Which of the following statements about driving in cold weather is true?",
      "When driving at night, you should:",
      "Which of the following statements about shifting into low gear is true?",
      "For your safety, when placing a warning triangle, you should:",
      "As the concentration of alcohol in the blood increases, what happens?",
      "Which of these things is good to remember when using a mirror?",
      "Skidding:",
      "If someone is driving directly behind you, you should:",
      "A basic principle to remember when loading cargo is to keep the load:",
      "How long should a driver look ahead while driving?",
      "How can you correct the steering wheel if you skid while accelerating?",
      "The purpose of brakes is:",
      "Controlled braking:",
      "You should stop driving:",
      "Which of these rules is not good to follow when caring for an injured person at an accident scene?",
      "You should avoid driving through deep puddles or standing water. But if you must, which of these steps will help keep your brakes working?",
      "Which of these statements about drugs is true?",
      "Which of these things is good to remember when crossing or entering a congested area with a heavy vehicle?",
      "You are driving a heavy vehicle with a manual transmission. You must stop on the side of the road while driving uphill. Which of these rules is good to follow when resuming driving uphill?",
      "You are driving a heavy vehicle. You must exit the highway using a curved ramp. You must?",
      "You are driving on a two-lane road. A driver from the opposite direction swerves into your lane and heads straight for you. Which of these options is best?",
      "Brake wear:",
      "Which of these statements about dealing with engine overheating is correct?",
      "Which of these statements about vehicle clearance is correct?",
      "Which of these statements about vehicle fires is correct?",
      "You must drive on slippery roads. Which of these things is good to do in those conditions?",
      "Which of these statements about acceleration is correct?",
      "Which of these statements about brakes is correct?",
      "You are checking the brakes and suspension during a pre-trip inspection. Which of these statements is incorrect?",
      "The driver's manual suggests some things to do when you pass a vehicle. Which of the following is not one of them?",
      "You start to move the vehicle from a standstill. As you apply power to the front wheels, they start to spin. You should:",
      "Which of these things is important to remember about emergency brakes?",
      "Which of these statements about tires and driving in hot weather is correct?",
      "Your vehicle is in a traffic emergency and you are likely to collide with another vehicle if you do not make a decision. Which of these rules is good to remember at a time like this?",
      "In the event of a fire, you can use water to extinguish it?",
      "To help you stay alert, you should?",
      "To avoid a collision, you should drive to the right side of the road. You are now driving at 40 miles per hour on the side of the road. How can you get back on the road?",
      "Which of these statements about driving in high winds is true?",
      "Which of these things is good to do when driving at night?",
      "You are driving a 40-foot vehicle at 35 miles per hour. The road is dry and visibility is good. What is the minimum distance you should keep in front of your vehicle to be safe?",
      "What is the proper way to hold the steering wheel?",
      "High beams should be:",
      "You see a sign on the vehicle in front of you. The sign is a red triangle with an orange center. What does this sign mean?",
      "Which of these items is not part of a pre-trip inspection of the engine?",
      "The road you are driving on has become very slippery due to a layer of ice. Which of these things is good to do in such conditions?",
      "You are driving a vehicle that can travel at 55 miles per hour on an open road. However, traffic is heavy and other vehicles are traveling at 35 miles per hour, even though the speed limit is 55 miles per hour. The safe speed for your vehicle is most likely:",
      "What is countersteering?",
      "Which of these statements about assisting heavy vehicles is correct?",
      "Which of these is the best explanation for using the brake pedal to descend a hill?",
      "Which of these statements about using turn signals is correct?",
      "Which of these statements about using the clutch twice and changing gears is correct?",
      "Which of these statements about speed control is correct?",
      "chocks are:",
      "To correct front wheel skidding, you must:",
      "When entering or exiting a sloping or curved highway:",
      "Which of the following trucks will need the most distance to stop?",
      "How many red reflective triangles must you carry?",
      "How often must you inspect your truck after a certain number of miles?",
      "There are two types of hinges, which are?",
      "The blood alcohol concentration (BAC) for commercial drivers is the level at which a driver is considered intoxicated when operating a commercial vehicle:",
      "Where should the ignition key be during a pre-trip inspection?",
      "When loading a trailer, if all the cargo is loaded in the back, it could cause:",
      "Communication means:",
      "If you are convicted of driving under the influence while operating a commercial vehicle, and this is your first offense, you will most likely receive:",
      "If you are stopped at a rest area on the side of the road and tested for BAC and found to have a concentration of 0.02, you will receive:",
      "Which of the following statements about speed control is correct?",
      "You are driving down a long, steep hill. Your brakes become very hot and fail. What should you do?",
      "Cargo center of gravity:",
      "To prevent the cargo from tipping over, there must be at least one tie-down ........ for every foot of cargo.",
      "While driving, snow accumulates on your windshield wipers and the windshield becomes unclean. You should:",
      "When the hydraulic brakes fail while driving, the system does not build pressure, or the brake pedal feels spongy or goes straight to the floor. What should you do?",
      "Which of these could be a sign of tire failure?",
      "To avoid damaging the brakes, you should:",
      "You must come to a complete stop when crossing railroad tracks:",
      "When driving at night, you should use high beams, but it is permissible to do so if there is oncoming traffic within ........ feet?",
      "Filling a commercial vehicle:",
      "When parking on the side of the road at night, you must:",
      "You must stop on a hill or bend in a two-lane road with traffic in both directions. You must place reflective triangles?",
      "Quick braking cannot be used in vehicles that run on:",
      "Sometimes you must leave the road for an emergency or urgent matter. When you do so, you must keep in mind that:",
      "Which of the following is not a sign of tire failure?",
      "Most skids:",
      "In bad weather, many drivers drive behind heavy vehicles. What should you do?",
      'Which of the following systems should receive extra attention during winter weather inspection?',
      "What happens to tar on the road pavement during hot weather?",
      "What is the best advice for drivers when a heavy fog occurs?",
      "In mountain driving you will have to use a lower gear to drive safely on a grade.Which of these does NOT affect your choice of gear?",
      "What should you do before driving in mountains?",
      "Escape ramps:",
      "Which of these is true about notifying the authorities after an accident occurs?",
      "If you are not sure what to use to put out a hazardous material fire you should:",
      "Which of these is NOT a danger of a rough acceleration?",
      "Which of these lights cannot be checked at the same time?",
      "You are inspecting hydraulic brakes. You should pump the brake pedal three times then apply firm pressure to the pedal for five seconds. If the brakes are working properly, the pedal should:",
      "Drivers of trucks and tractor-trailers with cargo must check that the cargo is well secured within the first miles of the trip.",
      "When starting a bus on a level surface with good traction there is often no need for:",
      "How does the weight of the vehicle affect stopping distance?",
      "When you are starting to move up a hill from a stop:",
      "What is true about using a heater?",
      "Why is damage to the exhaust system a danger?",
      "Which of these is NOT a danger when an automatic transmission is forced into a low gear at a high speed?",
      "Perception distance is the distance your vehicle travels from the time:",
      "Extra care is needed to keep your vehicle centered in your lane because commercial vehicles:",
      "You should lightly apply your brakes to flash the brake lights if:",
      "Merging to the road is safest if you:",
      "Which of these is NOT something you should do if your headlights are not working properly?",
      "Which of the statements about backing a heavy vehicle is NOT true?",
      "The distance that you should look ahead of your vehicle while driving is about _ at low speed.",
      "Which of these is correct about emergency or evasive action?",
      "What does emergency braking mean?",
      "When driving in cold weather your tire tread should:",
      "Which of these is true about hauling hazardous materials?",
      "Which vehicle will have the most difficulty staying in its lane during strong wind?",
      "Why does vehicle speed naturally increase on a downgrade?",
      "During the vehicle inspection, checking of____ will NOT prevent a fire.",
      "When is it necessary to learn how a fire extinguisher works?",
      "What is the most important reason to inspect your truck or bus?",
      "You are checking your steering and exhaust system in a pre-trip inspection. Which of these problems, if found, should be fixed before the vehicle is driven?",
      "Convex (curved) mirrors:",
      "Why is it important to shift gears correctly?",
      "What three distances build up the total stopping distance of your truck or bus?",
      "Which of these actions are NOT recommended for a left turn?",
      "When you are passing a vehicle,pedestrian, or bicycle you should assume that:",
      "When merging:",
      "Which of these is the proper signal to change lane?",
      "You are driving in an area with few streetlights, if you cannot see well with your headlights, which of the actions may help:",
      "Most serious skids result from:",
      "What should be true about other drivers:",
      "What is true about bad weather and driving conditions?",
      "Which of these statements about the hazard vehicle fire is true?",
      "You should wear a seat belt in a moving vehicle:",
      "Which of these items is NOT checked for a pre-trip inspection?",
      "Which of the statements about pre-trip inspection is true?",
      "Can state inspectors inspect your truck or bus?",
      "Which of these statements about cargo loading is true?",
      "Which of these is not required knowledge for drivers seeking a hazardous material endorsement?",
      "To determine blood alcohol concentration level for a person, it is necessary to know:",
      "Implied consent means:",
      "The engine brake effect is greater when the engine is ____ governed RPM and the transmission is on a___ gear.",
      "You are driving a 40-foot vehicle at 55 mph. The road is dry, and visibility is good. What is the least amount of space that you need to have in front of your vehicle?",
      "What should you do if a car coming toward you at night keeps its high beams on?",
      "If you must cross into the oncoming lane to make a turn, you should:",
      "Which of these is true about driving in a tunnel?",
      "You should use your horn when:",
      "The tread depth on front steering wheel tires should be:",
      "Your vehicle will be put out of service if _____ or more leaves in any leaf spring are missing.",
      "Brake drums (or discs) must not have cracks longer than ___ the width of the friction area.",
      "A hazard:",
      "You are driving a heavy vehicle. You must exit a highway using an off-ramp that curves downhill. You should:",
      "Which of these rigs has a higher chance to off-track while making a turn?",
      "How much space in front of you is needed while driving on a highway?",
      "Medicine used to treat the common cold:",
      "Which of these should you NOT do in an emergency situation?",
      "The primary cause of fatal crashes is:",
      "A car suddenly cuts in front of you, creating a hazard. Which of these actions should you NOT take?",
      "What should you do when you see a hazard in the roadway ahead of you?",
      "If your brakes fail on a downgrade, you must first:",
      "You should always turn on your emergency four-way flashers when you:",
      "Should brake adjustment be checked often ?",
      "Which of these is true about mirror adjusting?",
      "When you are driving on a snow packed road, you should reduce your speed by:",
      "The bridge formula:",
      "You should use your mirror to check?",
      "Which of these is true about the use of drug s while driving?",
      "Which of these is true about proper use of a steering wheel?",
      "When are helpers needed to back your vehicle?",
      "To avoid an accident you moved to the shoulder. Forced to return to the road, you should:",
      "Which of these would NOT help if windshield is covered with ice?",
      "Heavy vehicles often move slower than others. Which of these is NOT a good rule to follow while driving a heavy vehicle?",
      "Tourists may be hazardous because?",
      "What keeps an engine cool in hot weather driving?",
      "Cargo inspection:",
      "A vehicle is loaded with very little weight on the drive axle. What may happen?",
      "If your vehicle catches fire while you are driving, you should:",
      "Which of these statements about marking a stopped vehicle is true?",
      "Containerized loads:",
      "When a coolant container is part of a pressurized system which of these is true?",
      "When should you test your parking brakes?",
      "When going down a long steep downgrade you should always:",
      "Controlled braking is:",
      "Which of these is not a brake check you normally do during your walk-around inspection?",
      "One can recognize hazardous materials by looking on the container:",
      "Which of these is not a type of retarder?",
      "The total weight of a powered unit, the trailer and the cargo is called?",
      "Freeway exits can be dangerous for commercial vehicles, at what speed should you enter the exit?",
      "Which of these statments is correct",
      "Space _______ to the your vehicle is most important to manage.",
      "Your brakes can get wet when driving through heavy rain. What can happen if the brakes are applied?",
      "Which of the statements about an inspection of the suspension components is true?",
      "You are checking your brakes and suspension system for a pre-trip inspection. Which of these statements is true?",
      "You do not have hazardous materials endorsement in your commercial driver license. You can drive a vehicle hauling hazardous materials when:",
      "If you are convicted of driving a commercial vehicle under the influence of alcohol or drugs, you will lose your CDL for:",
      "Which of these is true about hazardous materials:",
      "You will be placed out of service for 24 hours if your blood alcohol concentration (BAC) is at least:",
      "What does emergency braking mean?",
      "You should try to park so that:",
      "Gross Vehicle Weight (GVW) means the following:",
      "After starting the engine:",
      "Whenever you double your speed, your vehicle has about how many times of destructive power if it crashes?",
      "If you do not have a CB-radio, what procedure should you follow on an accident scene?",
      "If you have a heavy load that is slowing you down on an upgrade you should:",
      "You should signal continuously while turning because:",
      "Which of these should be tested while the vehicle is stopped?",
      "Which of these statements about alcohol is NOT true?",
      "Overweight, oversized loads:",
      "Which of these statements about braking is true?",
      "Which of these pieces of emergency equipment should always be carried in your vehicle?",
      "If you have to make a vehicle inspection report you must sign it",
      "You must keep the papers about hauling hazardous materials:",
      "Which of these statements about rear drive wheel braking skid is true?",
      "The best drivers are those who watch and prepare for hazards. This is called ___ driving.",
      "What is the term for a commercial vehicle habit of swinging wide on turns?",
      "You may hang up on a railroad track if:",
      "Which of these is true about radiator shutters and the winter-front during winter driving?",
      "If you have a road emergency and must park on the shoulder, how soon should you put out your triangles?",
      "Which of these do not provide extra gears on some trucks?",
      "Which of these is true about tire pressure?",
      "What should you do if you are unsure whether you have enough overhead clearance?",
      "Which of these is true about tires and hot weather?",
      "Gross Vehicle Weight Rating (GVWR) means the following? ",
      "The value specified by the manufacturer as the loaded weight of a combination vehicle is?",
      "To avoid an accident you moved to the shoulder. The shoulder is clear, you should:",
    ]


    const arabicQuestions = [
      'انت تقود بشكل مستقيم علي طريق سريع بسرعة 50 ميل في الساعة, لا يوجد مركبات امامك, أذ فجأة انفجر اطار من مركبتك: ما الذي عليك القيام به اولاً؟'
      ,'انت تقود مركبة تعمل بناقل حركة يدوي, أي غيار يجب عليك استخدامه: من اجل النزول علي منحدر؟'
      ,'انت تتفقد العجلات و الاطارات من اجل فحص ما قبل الرحلة : أي العبارات التالية صحيح؟'
      ,'انت تتفقد العجلات و الاطارات من اجل فحص ما قبل الرحلة, أي العبارات التالية صحيح؟'
      ,'اذا كان هناك مركبة بدون شيء مرفق بها "عربة او مفصلة" دخلت في حلة انزلاق للعجلة الامامية, ماذا سوف يحدث:'
      ,'اذا كنت تريد مغادرة الطريق من اجل طارئ مروري, يجب عليك:'
      ,'أي العبارات التالية حول انواع معينة من الحمولة صحيح؟'
      ,'طبقاً لكتيب السائق, لماذا يجب عليك تقليل استخدام البوق؟'
      ,'انت ليس لديك تصريح بالتعامل مع المواد الخطرة علي رخصة القيادة التجارية الخاصة بك, و تم الطلب منك ان تقوم بتسليم المواد خطرة علي شاحنة عليها علامة المواد الخطرة. ما الذي عليك الٌقيام به:'
      ,'أي العبارات التالية حول البقاء يقظاً اثناء القيادة صحيح؟'
      ,'الشحنة الخاصة بك تعمل بفرامل هيدروليكية, بينما انت تسافر علي طريق مستوي, تضغط علي دواسة المكابح لتجدها تذهب مباشرة الي الارضية. اي العبارات التالية صحيح؟'
      ,'انت تقود المركبة بسرعة 55 ميل في الساعة علي ارضية جافة. ما المسافة التي سوف تحتاج اليها المركبة من اجل التوقف؟'
      ,'أي العبارات التالية حول القيادة في مناخ بارد صحيح؟'
      ,'عندما تقود ليلاً, يجب عليك:'
      ,'اي العبرات التالية حول نقل ناقل الحرقة الي الاسفل صحيحة؟'
      ,'من اجل سلامتك, عند وضع المثلث العاكس يجب عليك:'
      ,'كلما زاد تركيز الكحل في الدم, ماذا يحدث؟'
      ,'أي هذه الاشياء من الجيد تذكره عند استخدام المرآة؟'
      ,'الانزلاق:'
      ,'اذا كان هناك من يسير خلفك مباشرةً, يجب عليك:'
      ,'مبدأ اساسي من الواجب تذكره عند تحميل الحمولة هو ابقاء الحمولة:'
      ,'الي اي مدة يجب علي السائق ان ينظر الي امام السيارة بينما يقود؟'
      ,'كيف يمكنك تصحيح عجلة القيادة في حالة حدوث انزلاق اثناء التسارع؟'
      ,'الهدف من المثبطات هو:'
      ,'الكبح المتحكم فيه:'
      ,'يجب عليك التوقف عن القيادة:'
      ,'أي هذه القواعد ليس من الجيد اتباعه اثناء رعاية شخص مصاب في مكان حادث؟'
      ,'يجب عليك تجنب القيادة في البرك العميقة او الماء المتساقط. لكن اذا كان عليك فعل ذلك, اي هذه الخطوات سوف تساعدك علي ابقاء الفرامل تعمل؟'
      ,'اي هذه العبارات حول المخدرات صيح؟'
      ,'اي هذه الاشياء من الجيد تذكره عند عبور او دخول منطقة زحام بمركبة ثقيلة؟'
      ,'انت تقود مركبة ثقيلة تعمل بناقل حركة يدوي. يجب عليك التوقف علي جانب الطريق اثناء القيادة الي اعلي مرتفع. اي هذه القواعد من الجيد اتباعه عند معاودة الحركة الي اعلي المرتفع ؟'
      ,'انت تقود مركبة ثقيلة. يجب عليك الخروج من الطريق السريع باستخدام مخرج منحدر منحني. يجب عليك؟'
      ,'انت تقود في طريق حارتين .اذ بسائق قاضم من الاتجاه المعاكس ينزلق الي الحارة الخاصة بك و يتجه مباشرة اليك. اي هذه الخيارات هو الافضل؟'
      ,'المكابح تتآكل:'
      ,'أي هذه العبارات حول التعامل مع زيادة سخونة المحرك صحيح؟'
      ,'اي هذه العبارات حول المسافة اعلي المركبة صحيح؟'
      ,'اي هذه العبارات حول نيران المركبة صحيح؟'
      ,'يجب عليك القيادة في طرق زلق. اي هذه الاشياء من الجيد القيام بها في تلك الظروف؟'
      ,'اي هذه العبارات حول التسارع صحيح؟'
      ,'أي هذه العبارات حول المكابح صحيح؟'
      ,'انت  تقوم بتفقد المكابح و التعليق, في فحص ما قبل الرحلة. اي هذه العبارات غير صحيح؟'
      ,'كتيب السائق يقترح بعض الاشياء لفعلها عندما تقوم بتخطي مركبة. اي من الخيرات التالية ليس منهم؟'
      ,'انت تبدء في تحريك المركبة من الوقوف. كلما اضفت طاقة الي العجلات الامامية يبدؤون في الدوران. يجب عليك:'
      ,'أي هذه الاشياء من المهم تذكره حول مكابح الطوارئ؟'
      ,'أي هذه العبارات حول الاطارات و القيادة في مناخ حار صحيح؟'
      ,'مركبتك في طارئ مروري و من المحتمل ان تصطدم بمركبة اخري اذا لم تقوم باتخاذ اي قرار. أي هذه القواعد من الجيد تذكره في مثل هذا الوقت؟'
      ,'في حال نشوب حريق يمكنك استخدام الماء من اجل اطفائه؟'
      ,'من اجل المساعدة علي البقاء يقظاً: يجب عليك؟'
      ,'من اجل تجنب التصادم, وجب عليك القيادة الي جانب الطريق الايمن. انت الان تقود بسرعة 40 ميل في جانب الطريق. كيف يمكنك العودة الي الطريق مجدداً؟'
      ,'أي هذه العبارات حول القيادة في مناطق شديدة الرياح صحيح؟'
      ,'أي من هذه الاشياء من الجيد القيام به عندما تقوم بالقيادة ليلاً؟'
      ,'انت تقود مركبة ارتفاعها 40 قدم بسرعة 35 ميل في الساعة. الطريق جاف, الرؤية جيدة. ما هي اقل مساحة يجب عليك ابقاءها امام مركبتك لتكون أمن؟'
      ,'ما هي الطريقة المناسبة من اجل الامساك بعجلة القيادة؟'
      ,'الاضاءة المرتفعة يجب ان تكون:'
      ,'يمكنك رؤية علامة علي مركبة امامك. العلامة هي مثلث احمر مع مركز برتقالي. ما معني تلك العلامة؟'
      ,'اي هذه الاشياء ليس جزء من تفقد ما قبل الرحلة للمحرك؟'
      ,'الطريق الذي تقود عليه اصبح زلق للغاية بسبب طبقة من الجليد. اي هذه الاشياء من الجيد فعله في مثل هذه الظروف؟'
      ,'انت تقود مركبة من الممكن ان تقاض بسرعة 55 ميل في الساعة علي طريق مفتوح. لكن الزحام ثقيل و مركبات اخري تقوض بسرعة 35 ميل في الساعة, مع العلم ان اقصي سرعة هي 55 ميل في الساعة. آمن سرعة لمركبتك من المرجح ان تكون:'
      ,'ما هو التوجيه المضاد؟'
      ,'اي هذه العبارات حول مساعدة المركبات الثقيلة صحيح؟'
      ,'أي من هذه هو الشرح الافضل من اجل استخدام دواسة المكابح من اجل النزول من اعلي تلة؟'
      ,'اي هذه العبارات حول استخدام إشارات الانعطاف صحيح؟'
      ,'اي هذه العبارات حول استخدام الدبرياج مرتين و تغير ناقل الحركة صحيح؟'
      ,'أي هذه العبارات حول التحكم في السرعة صحيح؟'
      ,'المثبطات:'
      ,'لتصحيح انزلاق العجلات الامامية, يجب عليك:'
      ,'اثناء الدخول او الخروج من طريق سريع منحدر او منحني:'
      ,'اي من هذه الشاحنات التالية سوف يحتاج الي اكثر مسافة من اجل التوقف؟'
      ,'كم من المثلثات العاكسة الحمراء يجب عليك ان تحمله؟'
      ,'من الواجب عليك تفقد الشاحنة بعد عدد معين من الاميال من بدء الرحلة؟'
      ,'هناك نوعين من المفصلات, هما؟'
      ,'نسبة تركيز الكحول في الدم(The BAC) للسائقين التجاريين تكون النسبة التي يكون فيها السائق مخموراً عندما يقوض مركبة تجارية:'
      ,'اين يجب ان يكون مفتاح التشغيل اثناء تفقد ما قبل الرحلة؟'
      ,'عندما تقوم بتحميل مقطورة, اذا كانت البضاعة محملة كلها في الخلف, من الممكن ان يتسبب ذلك في:'
      ,'التواصل يعني:'
      ,'اذا تمت ادنتك بالقيادة تحت تأثير اثناء قيادة مركبة تجارية, و هذه هي المرة الاولي, غالباً سوف تحصل علي:'
      ,'اذا توقفت في استراحة علي جانب الطريق و تم اختبارك في فحص السكر(BAC) و وجد ان تركيز 0.02 سوف تحصل علي:'
      ,'أي العبارات التالية حول التحكم في السرعة صحيح؟'
      ,'انت تقود في منحدر طويل, نزولاً. المكابح الخاصة بك اصبحت شديدة السخونة و فشلت. ماذا يجب عليك ان تفعل؟'
      ,'مركز جاذبية الحمولة:'
      ,'لتجنب انقلاب الشحنة, يجب ان يكون هناك علي الاقل ربطة واحدة ........ لكل قدم من الحمولة.'
      ,'اثناء القيادة, الثلج يتراكم علي الماسحات الخصة بك و اصبح الزجاج الامامي غير نظيف. يجب عليك:'
      ,'عندما تفشل المكابح الهيدروليكية اثناء القيادة, النظام لا يقوب ببناء ضغط او دواسة المكابح تكون اسفنجية او تذهب مباشرة الي الارضية. ماذا يجب عليك ان تفعل؟'
      ,'أي من هذه ربما يعد علامة علي فشل الاطار؟'
      ,'لتجنب اتلاف المكابح يجب عليك:'
      ,'يجب الوقوف بشكل كامل عند عبور خط السكة الحديد:'
      ,'عندما تقود ليلاً يجب عليك استخدام الاضاءة المرتفعة ولكن يجوز فعل ذلك اذا كان هناك مرور قادم في مسافة ........ قدم؟'
      ,'تعبئة مركبة تجارية:'
      ,'عندما تقوم بالركن علي جنب الطريق في الليل يجب عليك:'
      ,'يجب عليك ان تتوقف علي تلة او منعطف في طريق حارتين في اتجاهين معاكسين. يجب عليك وضع المثلثات العاكسة؟'
      ,'الكبح السريع لا يمكن ان يستخدم في مركبات التي تعمل ب:'
      ,'في بعض الاحيان يجب عليك ان مغادرة طريق من اجل أمر طارئ او عاجل, عندما تفعل ذلك يجب ان طبقي في ذهنك, ان:'
      ,'أي هذه الخيارات التالية ليست علامة علي فشل الاطار؟'
      ,'معظم الانزلاقات:'
      ,'في المناخ السيئ الكثير من السائقين يقودون خلف سائق المركبة الثقيلة. ماذا يجب عليك ان تفعل؟'
      ,'أي من الأنظمة التالية, تحتاج الي اهتمام اكثر خلال الفحص في فطرة الشتاء؟'
      ,"ماذا يحدث للقطران الذي علي الطريق, في المناخ الحار؟"
      ,"ما هي النصيحة الأفضل, من اجل السائقين عندما يكون هناك شبورة شديدة؟"
      ,"في القيادة علي الجبال يجب عليك استخدام غيارات منخفضة من اجل القيادة بشكل امن علي المنحدرات, أي من هذه الاختيارات لا يؤثر في اختيارك للغيار المناسب؟"
      ,"ماذا يجب عليك ان تفعل قبل القيادة في الجبال؟"
      ,"مخارج الهروب"
      ,"أي هذه العبارات صحيحة, حول اخبار السلطات عن وقع حادث بعد وقوعه؟"
      ,"اذا كنت غير متأكد مما يجب عليك استخدامه من اجل إطفاء حريق مواد خطرة؟"
      ,"أي من هذا ليس من خطر التسارع السيئ؟"
      ,"أي هذه الاضاءات لا يمكن فحصها في نفس الوقت؟"
      ,"انت تفحص المكابح الهيدروليكية, يجب عليك رفع دواسة المكابح ثلاث مرات, ثم أضافة ضغط محكم علي دواسة المكابح لمدة خمس ثواني, اذا كانت المكابح تعمل كما ينبغي, سوف تكون الدواسة؟"
      ,"يجب علي سائقي الشاحنات و المقطورات المحملة بالبضاعة, يجب عليهم ان يتأكدوا ان البضاعة مثبتة بأحكام خلال أول .......... اميال في الرحلة"
      ,"عند بدء تشغيل الحافلة علي سطح مستوي مع وجود عزم جيد عادة لا حاجة الي"
      ,"كيف يؤثر وزن المركبة علي القدرة علي التوقف؟"
      ,"اذا بدأت في التحرك الي اعلي تلة من التوقف"
      ,"ما هو صحيح حول استخدام المدفأة؟"
      ,"لماذا يعد ضرر نظام العادم شيء خطير؟"
      ,"أي من هذا ليس خطراً عندما يتم اجبار ناقل حركة اوتوماتيكي علي غيار منخفض في سرعة مرتفعة؟"
      ,"مسافة الادراك: هي المسافة التي تقطعها مركبتك"
      ,"انت في حاجة الي حرص إضافي من اجل إبقاء المركبة في منتصف الحارة لأن المركبات التجارية"
      ,"يجب عليك ان تضغط علي المكابح بخفة من اجل تشغيل اضاءة المكابح اذا"
      ,"دخول الطريق يكون من الأمن اذا"
      ,"أي هذه الأشياء لا يجب عليك فعله اذا كانت الإضاءة الأمامية لا تعمل كما ينبغي"
      ,"أي العبارات التالية حول مساعدة المركبات الثقيلة علي الرجوع غير صحيح؟"
      ,"المسافة التي يجب عليك النظر اليها امام مركبتك ....... اثناء القيادة علي سرعة منخفضة؟"
      ,"أي هذه العبارات صحيح حول حالة الطوارئ او حركة المراوغة؟"
      ,"ما معني مصطلح مكابح الطوارئ"
      ,"بينما تقود في مناخ بارد المسارات التي في مداس الاطار يجب ان تكون؟"
      ,"أي من العبارات التالية صحيحة حول تعبئة المواد الخطرة؟"
      ,"أي مركبة سوف يكون لديها صعوبة أكبر في البقاء في الحارة التي تسير فيها, في حلة وجود رياح شديدة؟"
      ,"لماذا تزيد سرعة المركبات بشكل طبيعي عند النزول من منحدر؟"
      ,"اثناء فحص المركبة, تفقد ........... لا يمنع حدوث حريق؟"
      ,"متي يكون من المهم تعلم استخدام مطفأة الحريق؟"
      ,"ما هو اهم سبب لتفقد الشاحنة او الحافلة الخاصة بك؟"
      ,"انت تتفقد التحكم و نظام العادم في فحص ما قبل الرحلة, أي هذه المشاكل, اذا تم العثور عليها يجب إصلاحها قبل ان يتم قيادة المركبة."
      ,"المرآة المحدبة (المنحنية)"
      ,"لماذا من المهم التنقل عبر الغيارات بشكل صحيح؟"
      ,"ما هي المسافات الثلاث التي تشكل مسافة التوقف الاجمالية للشاحنة او الباص الخاص بك؟"
      ,"أي هذه الأفعال لا ينبغي القيام به من اجل الانعطاف الي اليسار؟"
      ,"عندما تقوم بتخطي مركبة, او المشاة ,او الدرجات الهوائية, يجب عليك ان تفترض"
      ,"عن الدخول"
      ,"أي هذه الأشرات هي الإشارة الصحية من اجل تغير الحارة في المرور؟"
      ,"انت تقود في منطقة ذات اضاءة منخفضة, اذا كان لا يمكنك ان تري جيداً بالمصابيح الامامية, أي من هذه الأفعال من المرجح ان يساعد"
      ,"معظم الانزلاقات الخطيرة تكون نتيجة"
      ,"ماذا يجب ان يكون صحيح حول السائقين الاخرين؟"
      ,"ما هو صحيح حول المناخ السيئ و ظروف القيادة؟"
      ,"أي هذه العبارات حول اشتعال مركبة تحمل المواد الخطرة صحيح؟"
      ,"يجب عليك وضع حزام الأمان في مركبة تتحرك"
      ,"أي هذه الأشياء لا يتم تفقدها في فحص ما قبل الرحلة؟"
      ,"أي هذه الأشياء حول تفقد ما قبل الرحلة صحيح؟"
      ,"يمكن للفاحصين التابعين للسلطات ان يفحصوا شاحنتك, او الباص؟"
      ,"أي هذه العبارات حول تحميل البضاعة صحيح؟"
      ,"أي من هذه المعلومات ليس من المطلوب معرفتها بالنسبة الي السائقين الذين يرغبون في الحصول علي ترخيص نقل المواد الخطرة؟"
      ,"من اجل معرفة نسبة الكحول في دم شخصاً ما, من المهم معرفة؟"
      ,"الموافقة الضمنية"
      ,"يكون كبح المحرك اكثر فعالية عندما يكون المحرك.......... من اقصي عدد لفات و ناقل الحركة يكون في غيار..........؟"
      ,"انت تقود مركبة ارتفاعها 40- قدم بسرعة 55 ميل في الساعة, الطريق جاف و الرؤية جيدة, ما هي اقل مساحة تحتاج اليها امام مركبتك؟"
      ,"ماذا يجب عليك ان تفعل اذا كان هناك سيارة قادمة في اتجاهك في الليل و الإضاءة المرتفعة الخاصة بها تعمل؟"
      ,"اذا كان يجب عليك العبور الي حارة المرور المقابل من اجل الانعطاف, ماذا يجب عليك ان تفعل"
      ,"أي هذه العبارات صحيح حول القيادة في الانفاق"
      ,"يجب عليك استخدام البوق عندما"
      ,"عمق مسارات مداس الاطار في العجلات الامامية يجب ان يكون"
      ,"المركبة الخاصة بك سوف توضع خارج الخدمة اذا...........او عدد طبقات اكثر مفقود من الزنبرك الورقي"
      ,"أسطوانة المكابح يجب ان تكون بلا شقوق اكبر من........عرض مسافة الاحتكاك"
      ,"خطر"
      ,"انت تقود مركبة ثقيلة, يجب عليك الخروج من الطريق السريع من علي مخرج منحدر منحني, ماذا يجب عليك ان تفعل."
      ,"أي هذه المنصات لديها احتمالية اعلي للخروج عن المسار اثناء الانعطاف؟"
      ,"كم المسافة التي تحتاج اليها امامك اثناء القيادة علي طريق سريع"
      ,"الدواء المستخدم في علاج البرد"
      ,"أي هذه الخيارات لا يجب القيام به اثناء حالات الطوارئ؟"
      ,"السبب الرئيسي في حوادث التحطم القاتلة"
      ,"سيارة تظهر امامك فجأة خالقة بذلك موقف خطير, أي هذه الخيارات لا يجب عليك القيام به؟"
      ,"ماذا يجب عليك ان تفعل عندما ترا شيء خطير علي الطريق امامك؟"
      ,"المكابح الخاصة بك تفشل في منحدر, ماذا يجب عليك ان تفعل اولاً"
      ,"يجب عليك داماً تشغيل اضاءة عندما تكون"
      ,"هل يجب فحص تعديل المكابح عادةً؟"
      ,"أي هذه العبارات صحيح حول تعديل المرايا؟"
      ,"عندما تقود في طريق ملئ بالثلوج, يجب عليك ان تقوم بتقليل السرعة الي"
      ,"الصياغة الراضية من اجل عبور الجسر؟"
      ,"يجب عليك استخدام المرايا من اجل فحص؟"
      ,"أي هذه الاختيارات صحيح حول استخدام الوصفات الطبية؟"
      ,"أي هذه العبارات صحيح حول استخدام عجلة القيادة؟"
      ,"اذا كنت في حاجة الي مساعدين من اجل الرجوع بالمركبة الي الخلف؟"
      ,"من اجل تجنب حادث, انتقلت الي جانب الطريق, انت مجبر علي الرجوع الي الطريق, ماذا يجب عليك ان تفعل"
      ,"أي من هذه الاختيارات لا تساعد اذا تم تخطية الزجاج الامامي بالثلج؟"
      ,"المركبات الثقيلة عادة ما تتحرك ابطء من المركبات الأخرى, أي هذه القوانين ليس من الجيد اتباعه اثناء قيادة مركبة ثقيلة؟"
      ,"السائحين من الممكن ان يشكله خطر لانهم؟"
      ,"ما الذي يبقي المحرك بارداً في المناخ الحار؟"
      ,"فحص البضاعة"
      ,"تم تعبئة مركبة بوزن خفيف في اتجاه محور القيادة, ماذا من المحتمل ان يحدث؟"
      ,"اذا امسكت النيران بالمركبة الخاصة بك اثناء القيادة, يجب عليك"
      ,"أي العبارات التالية حول تعليم مركبة متوقفة؟"
      ,"البضاعة التي توجد في حاويات"
      ,"عندما تكون قربة سائل التبريد جزء من نظام تبريد مغلق, أي هذه العبارات صحيح؟"
      ,"متي يجب عليك تفقد مكابح الركن"
      ,"عند النزول من منحدر طويل, يجب عليك"
      ,"الكبح المتحكم فيه"
      ,"أي هذه الاختيارات لا يعد تفقد مكابح عادي, تقوم به خلال فحص المركبة من الخارج"
      ,"يمكن للشخص التعرف علي حاوية المواد الخطرة من خلا النظر علي؟"
      ,"أي هذه الاختيارات ليست نوع من أنواع المثبطات؟"
      ,"الوزن الإجمالي للوحدة المعبئة بالكامل, المقطورة و البضاعة المحملة في داخلها؟"
      ,"مخارج الطريق السريع من الممكن ان تكون خطيرة علي المركبات التجارية, علي أي سرعة يجب عليك دخول الطريق السريع؟"
      ,"أي هذه العبرات صحيح؟"
      ,"المسافة .......... هي من اهم الأشياء التي يجب التحكم بها."
      ,"من الممكن ان تبتل المكابح الخصة بك اثناء القيادة في الامطار الشديدة, ماذا من الممكن ان يحدث اذا تم استخدام المكابح"
      ,"أي هذه العبارات حول تفقد أجزاء نظام التعليق صحيح؟"
      ,"انت تتفقد المكابح و نظام التعليق الخاص بك في فحص ما قبل الرحلة, أي هذه العبرات صحيح؟"
      ,"انت ليس لديك ترخيص التعامل مع المواد الخطيرة علي رخصة القيادة التجارية الخاصة بك, يمكنك ان تقود شاحنة تحمل المواد الخطرة عندما:"
      ,"اذا تمت ادنتك بقيادة مركبة تجارية تحت تأثير الكحول او المخدرات, سوف تخسر رخصة القيادة التجارية (CDL) لمدة:"
      ,"أي هذه العبارات صحيحة حول المواد الخطيرة:"
      ,"سوف يتم وضعك خارج الخدمة لمدة 24 ساعة اذا كان تركيز الكحول في الدم (BAC) علي الأقل:"
      ,"ما معني مصطلح مكابح الطوارئ"
      ,"يجب عليك ان تقوم بالركن حيث يمكنك:"
      ,"الوزن الكلي للمركبة(GVW) يعني التالي:"
      ,"بعد بدء تشغيل المحرك:"
      ,"عندما تقوم بمضاعفة سرعتك, ما مستوي القوة التدميرية الخاصة بمركبتك في حالة الاصطدام؟"
      ,"انت ليس لديك مذياع المواطنين, ما الإجراءات التي يجب عليك ان تقوم بها في مكان الحادث؟"
      ,"اذا كان لديك حمولة ثقيلة تبطئك اثناء صعود منحدر, يجب عليك:"
      ,"يجب عليك الإشارة بشكل مستمر اثناء الانعطاف, لأن:"
      ,"أي هذه الأشياء يجب عليك فحصه اثناء توقف المركبة ؟"
      ,"أي هذه العبارات حول الكحول, ليست صحيحة؟"
      ,"الحمولة ذات الوزن الزائد, او الحجم الزائد:"
      ,"أي هذه العبارات حول المكابح صحيح؟"
      ,"أي هذه القطع من مستلزمات الطوارئ, يجب ان يكون معك في المركبة الخاصة بك؟"
      ,"اذا كان يجب عليك التبليغ بفحص المركبة يجب عليك توقيعه"
      ,"يجب عليك إبقاء الأوراق التي تفيد ان الحمولة هي مواد خطيرة:"
      ,"أي هذه العبارات حول انزلاق العجلة الخلفية بسب استخدام المكابح صحيح؟"
      ,"افضل السائقين هم الذين ينظرون, و يستعدون للخطر, هذا يسمي........"
      ,"ما هو المصطلح المستخدم لعادة المركبة التجارية بالانحراف علي نطاق واسع اثناء الالتفاف؟"
      ,"من المرجح ان تبطء عند الاقتراب من خط سكة حديد:"
      ,"أي هذه العبارات صيح حول غطاء الردياتير (winter-front) اثناء القيادة في الشتاء."
      ,"اذا كان هناك طارئ مروري, و وجب عليك التوقف علي جانب الطريق, ما السرعة التي يحب عليك وضع المثلثات علي الطريق؟"
      ,"أي هذه الخيرات لا توفر غيارات إضافية في بعض الشاحنات؟"
      ,"أي هذه العبارات صحيح حول ضغط هواء الإطارات؟"
      ,"ماذا يجب عليك ان تفعل, اذا كنت غير متأكد من وجود فراغ كافي اعلي المركبة"
      ,"أي هذه الأشياء صحيح حول الاطارات و الحرارة المرتفعة؟"
      ,"تصنيف وزن المركبة الإجمالي (GVWR)  يعني التالي؟"
      ,"القيمة المحددة بوساطة المصنع لكلاً من الحمولة و المركبة هي؟"
      ,"من اجل تجنب حادث, انت انتقلت الي جانب الطريق, جانب الطريق خالي, يجب عليك:"
    ]


    if(englishQuestions.length !== arabicQuestions.length) {
      throw new Error("array mismatch")
    }
    const questions = englishQuestions.map((text, i)=>({
      questionCate : "GENERAL",
      questionText : text,
      questionTextAr : arabicQuestions[i],
    }))

    await Question.createMany(questions)
  }
}
