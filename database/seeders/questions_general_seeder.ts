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
