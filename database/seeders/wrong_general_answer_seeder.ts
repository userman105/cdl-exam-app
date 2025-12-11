import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Answer from '#models/answer'
export default class wrongGeneralAnswerSeeder extends BaseSeeder {
  async run() {
    const englishAnswers =[
      "Start using the emergency brakes.",
      "Use the brakes lightly.",

      "A higher gear than the one used to climb the slope.",
      "The same gear used to climb the slope.",

      "The vehicle can be driven safely if one wheel lug nut is missing.",
      "Incompatible lug nuts can be used on the same vehicle.",

      "Bias-ply and radial tires can be used together on the same vehicle.",
      "2/32-inch tires can be used safely on the front wheels.",

      "They will go straight ahead but will turn if the steering wheel is turned.",
      "They will slide sideways and turn outward.",

      "Avoid the emergency lane as it is not designed for heavy vehicles.",
      "Shift all wheels off the curb.",

      "Large loads can be transported without a special permit when the roads are not congested.",
      "When transporting liquids, the tank must always be completely full.",

      "You must always hold the steering wheel firmly with both hands.",
      "The horn is not a good way to alert others to your presence.",

      "Load the cargo to the nearest location where there is a driver with a permit to handle hazardous materials.",
      "Load the cargo but make a DOT report after the trip.",

      "If you must stop for a nap, you must be at a truck stop or other rest area and not on the side of the road.",
      "A half-hour coffee break will be more beneficial than a half-hour nap.",

      "Shifting the transmission into neutral will help stop the vehicle.",
      "The parking brakes also did not work because they are part of the same hydraulic system.",

      "Poor vehicle space.",
      "Half the size of a football field.",

      "Leaks in the exhaust system are less dangerous in cold weather.",
      "The engine cannot overheat in cold weather.",

      "Look to the left side of the road when a vehicle is coming towards you.",
      "Adjust your speed to keep the stopping distance within your field of vision.",

      "When using double clutching, you should let the engine speed drop while releasing the clutch, with the gear lever in neutral.",
      "When downshifting for a hill, you should do so when starting at the bottom of the hill.",

      "Turn on the headlights.",
      "Stay out of sight while walking to the location where you will place it.",

      "The user clearly sees the effect of the kohl on them.",
      "The effect of the kohl diminishes.",

      "1) A convex mirror makes objects appear larger and closer than they actually are.",
      "3) You should look in the mirror for at least a few seconds.",

      "It Only happens when there is a lot of water.",
      "It Can not happen when driving through a puddle.",

      "Turn on your brake lights.",
      "Signal to those behind you when it is safe to pass you.",

      "In the rear.",
      "In the front.",

      "5-8 seconds.",
      "18-21 seconds.",

      "Add more power to the wheels.",
      "Shift the transmission down.",

      "Add extra braking force to the non-drive axle.",
      "To help prevent skidding.",

      "It Includes looking at the wheels for a brief moment.",
      "It Can be used when turning at a sharp angle.",

      "After 9 hours.",
      "After 5 hours.",

      "If a qualified person is assisting them, do not do anything unless asked.",
      "Move seriously injured people if there is a risk of fire or traffic.",

      "Press both the brake and accelerator pedals after getting out of the water.",
      "Turn on the brake heater.",

      "Drivers can use prescription drugs while driving.",
      "Amphetamines can be used to keep drivers alert.",

      "Because heavy vehicles are easy to see, you can rely on other drivers to get out of the way or slow down for you.",
      "The best way to get through traffic is to try to change lanes constantly.",

      "Lower the clutch while slowly pressing the gas pedal.",
      "Let the vehicle roll back a few feet before using the clutch, but turn the steering wheel so that the rear of the vehicle can get out of the way.",

      "Slow down to the speed posted on the curved downhill exit.",
      "Wait until you reach the curve before shifting down.",

      "Move to the left side of the road.",
      "Press hard on the brakes.",

      "This can be corrected by releasing the brakes for 1-2 seconds and repeating the process.",
      "This problem only occurs with drum brakes.",

      "There is no need for antifreeze when the weather is warm.",
      "Never turn off a hot engine until it has cooled down.",

      "You should assume that the elevation signs posted on the road are correct.",
      "If the road surface causes your vehicle to veer toward the edge of the road, you should drive closer to the edge.",

      "If the load in a truck or trailer catches fire, you should open the cargo door as quickly as possible.",
      "If your engine is on fire, you should open the hood as quickly as possible.",

      "Use smaller distances between you and other drivers.",
      "Use the brakes when turning.",

      "You will feel a jolt if the vehicle's acceleration is correct.",
      "When torque is weak, more power must be added to the acceleration.",

      "Drum brakes cool quickly if the vehicle is moving fast.",
      "The brakes have greater stopping power than when they are hot.",

      "A single missing layer on the paper spring can be dangerous.",
      "A broken drum must be replaced.",

      "Press the horn lightly.",
      "Assume that the other driver cannot see you.",

      "Shift into low gear.",
      "Take your foot off the accelerator and put it on the brakes.",

      "Do not use it without shifting into low gear.",
      "Disengaging the steering axle brakes will help keep the vehicle straight during an emergency stop.",

      "You should check your tires every two hours or 100 miles if you are driving in hot weather.",
      "Tire pressure decreases as the temperature of the tire increases.",

      "Stopping is always the best option in traffic emergencies.",
      "Leaving the road is always more dangerous than colliding with another vehicle.",

      "Electrical fire.",
      "Gasoline fire.",

      "Schedule trips for times when you are usually awake.",
      "Take cold medicine if you have a cold.",

      "Press hard on the brakes to slow the vehicle, then turn sharply onto the road.",
      "Turn sharply onto the road, then press the brakes while correcting the direction.",

      "The lighter your vehicle, the fewer problems you will have with wind.",
      "You should drive alongside other vehicles to reduce the force of the wind.",

      "Look directly at the oncoming lights for a short time.",
      "Keep your speed low enough to be able to stop within the range of the lights.",

      "3 seconds.",
      "5 seconds.",

      "Both hands close together, near the top of the steering wheel.",
      "Both hands close together, near the bottom of the steering wheel.",

      "Open up to 100 feet from another vehicle.",
      "It is activated when an oncoming driver does not turn on their headlights.",

      "The vehicle is carrying hazardous materials.",
      "The vehicle is being driven by a learner driver.",

      "Insulate worn electrical wires.",
      "Engine oil level.",

      "Shift the transmission down to stop.",
      "Keep your speed variable between moving and stopping.",

      "45 miles per hour.",
      "55 miles per hour.",

      "Use the steering wheel brakes to avoid over steering.",
      "Turn the steering wheel counterclockwise.",

      "It is safer to support the right side of the vehicle than the driver's side.",
      "Assistants must remain out of the driver's field of vision and use only audible signals to communicate with the driver.",

      "Lift the pedal slightly.",
      "Press firmly and then release the brakes.",

      "You do not need to use your turn signal when changing lanes in traffic on a four-lane highway.",
      "You must use your signals to indicate your vehicle when leaving the lane you are traveling in.",

      "Double braking should only be used for heavy loads.",
      "Double braking should not be used when the road is slippery.",

      "Empty trucks always stop at less distance than fully loaded trucks.",
      "You must determine your speed so that you can stop in the distance you see ahead of you.",

      "It works when you press the brake pedal.",
      "It causes brake wear.",

      "Double the pressure on the brakes.",
      "Double the pressure on the brakes, while quickly turning in the opposite direction.",

      "Slow down to at least 50% of the official speed limit posted on the road.",
      "Maintain the same speed as posted on the road.",

      "Loaded truck.",
      "Truck without tailgate.",

      "4",
      "2",

      "150",
      "100",

      "Trailer.",
      "Tractor.",

      "0.01",
      "0.10",

      "At the place of operation.",
      "In the driver's seat.",

      "The wheel will stop turning.",
      "Damage to the steering column.",

      "Talk to law enforcement.",
      "Talk on the citizen radio.",

      "One-year probation.",
      "$250 fine.",

      "You will be in big trouble with your distributor.",
      "You will be out of service for 72 hours.",

      "Empty and loaded trucks will have the same stopping distance.",
      "If you double your speed, the stopping distance will double.",

      "Shift the transmission down and lift the brake pedal.",
      "Do both.",

      "It should be as high as possible.",
      "The only problem is if the vehicle is overloaded.",

      "20",
      "15",

      "Continue driving and turn on the ice melt.",
      "Continue driving and spray the windshield with washer fluid.",

      "Put the vehicle in neutral and use the parking brake.",
      "Press the brake pedal as hard as you can.",

      "The wheel slips.",
      "An annoying squeaking sound.",

      "Drive downhill if the slope is not too steep.",
      "Apply continuous pressure to the brakes while driving downhill.",

      "No flagman, worn signs, or dilapidated crossing gates.",
      "Crossing in a city or town where trains frequently pass.",

      "400",
      "300",

      "Not dangerous if you have an assistant.",
      "Not dangerous if you don't have to turn.",

      "Place emergency lights within 30 minutes.",
      "Use tail lights to signal danger to other drivers.",

      "Place them at the rear so that other drivers can see you.",
      "200 feet behind you.",

      "Trailer.",
      "Hazardous materials.",

      "You may not be able to get back on the road due to the gravel used on the side of the road.",
      "Most roadsides are not strong enough to support a heavy vehicle.",

      "Fishtailing.",
      "Steering wheel lockup.",

      "It Does not occur if you have radial tires.",
      "It Occurs in snow.",

      "Press the brakes lightly to warn drivers behind you to back up.",
      "Increase your speed to increase the distance between you and those behind you.",

      "Steering.",
      "Suspension.",
      "Nothing.",
      "It becomes staining making tires stick to the road",
      "Alternate your own high beams to improve your vision.",
      "Do not drive too slowly or other drivers may hit you.",
      "The weight of the load.",
      "The length of the grade.",
      "Unhook your steering axle brakes.",
      "Carry the tire chains in your vehicle.",
      "Are not designed for tractors-double trailers.",
      "Are designed to slow vehicles so they can get back on the road at the safe speed.",
      "You should notify authorities about an accident before doing anything else.",
      "An exact location is not necessary just Identify the road and the vehicles involved.",
      "Use dirt.",
      "Use water.",
      "Mechanical damage.",
      "Damage of a coupling.",
      "Turn signals, tail lights and clearance lights.",
      "Headlights, brake lights, and clearance lights.",
      "Sink to the floor.",
      "Depress slightly.",
      "25",
      "10",
      "Slow acceleration.",
      "tire check.",
      "If brakes work, weight will have no effect on stopping distance.",
      "Fully loaded trucks take longer to stop, or the buses loaded with passengers take less distance than empty ones.",
      "Keep the trailer brake hand valve applied until you reach 20mph.",
      "Engage the clutch and accelerate quickly.",
      "If you feel sleepy, warming of your cab with the heater will help you stay alert.",
      "You must have at least one extra heater such as a mirror heater, battery pack heater, or fuel tank heater when temperature drops below freezing point.",
      "You can pollute the air with the exhaust smoke.",
      "Noise can damage the driver's ears.",
      "A loss of engine braking effect.",
      "Damage to the transmission.",
      "Your eyes see a hazard to the time your foot pushes to the brake pedal.",
      "the brain tells the foot to push the brake pedal to time the foot responses.",
      "Require a lot of room to change lane.",
      "Tend to sway from time to time.",
      "A driver tailgates your vehicle.",
      "police car is approaching you from the other direction.",
      "Gain speed on the shoulder and then merge",
      "Bend over into the nearest lane so the other vehicles will give you room.",
      "Adjust headlights.",
      "Clean your headlights",
      "you should use a helper and communicate with him with hand signals.",
      "You should back and turn toward the driver's side whenever it is possible.",
      "1/2 block",
      "2 blocks",
      "You can stop more quickly than you can turn to miss obstacles.",
      "Stopping is always the safest thing to do in a traffic emergency.",
      "Pushing down the brake pedal as hard as you can.",
      "Pushing down pedal and turning sharply.",
      "Be checked every one-hundred miles or every 2 hours.",
      "Be double the depth required in normal weather.",
      "Cylinders loaded with compressed gas must be sealed before transportation if the are unmarked",
      "Cargo like this must be marked with a 4-inch-diameter, red circle on the tank",
      "A tractor pulling  a loaded flat-bed trailer.",
      "A triple axle vehicle with cargo.",
      "Lack of traction.",
      "The engine runs smoother.",
      "Electrical system Isolation.",
      "Cargo ventilation.",
      "Only when the fire happens.",
      "Only when you are transporting flammable materials.",
      "To avoid being cited.",
      "It's the law.",
      "Oil on a tire rod.",
      "if a gray smoke is coming out from the exhaust pipe.",
      "Make objects appear closer than they really are.",
      "Make objects appear larger than they really are.",
      "To keep the engine oil flowing",
      "To keep the engine warm.",
      "Attention distance, reaction distance, and slowing distance.",
      "Respond distance, observation distance, and braking distance.",
      "Start your turn in the center of the intersection.",
      "Use a right-hand turn lane if there are two turning lanes.",
      "they see your vehicle",
      "They know you are to pass.",
      "Assume other drivers will allow you to merge.",
      "Check your mirrors to make sure the rear of your vehicle will not hit anything.",
      "Signal before the change and move over quickly.",
      "Signal after you begin change and cross over slowly.",
      "Find another route that is better lit even if it is out of your way.",
      "turn your interior lights on and adjust your instrument lights.",
      "An uneven load.",
      "Turning too sharply.",
      "Mail or delivery trucks are professionals and do not pose a hazard.",
      "Drivers who use turn signals should always be trusted to turn towards the signaled direction.",
      "The road is more slippery when the rain continues than when rain begins.",
      "Driving conditions became more Dangerous when temperature arises above freezing.",
      "Carrying a fully charged fire extinguisher may prevent a fire.",
      "Under inflated tires cannot cause a vehicle fire.",
      "Only when you are on a highway.",
      "Only when you are driving.",
      "Cargo security.",
      "Whether all lights are working.",
      "Leave key in the ignition so you do not lose it when ou are under the truck.",
      "When you park on a street, you should walk so you face away from an oncoming traffic.",
      "No.",
      "Yes, but cannot put you out of service.",
      "The legal maximum weight allowed by the state is considered safe for all driving conditions.",
      "If cargo is loaded by the shipper a driver is not responsible for its load.",
      "When to use the placards.",
      "Which products can be loaded together.",
      "How often they drink alcohol.",
      "Their age.",
      "You are giving your consent to inspect your vehicle for alcohol.",
      "It is understood that you may drink alcohol now and then.",
      "Above, lower",
      "Below, higher",
      "4 seconds",
      "6 seconds",
      "Flash your high beams quickly at the other driver.",
      "Slow down and look straight ahead in your lane.",
      "Back to allow the oncoming traffic to pass.",
      "Complete your turn without stopping.",
      "Headlights are required by law.",
      "Emergency flashers are required by law.",
      "car is in your way",
      "You want to change a lane.",
      "Not less than 2/32 inch.",
      "More than 6/32 inch.",
      "1/2",
      "1/3",
      "1/3",
      "1/2",
      "Cannot turn into emergency",
      "Does not need to be seen.",
      "Slow to the posted speed limit for the off-ramp.",
      "Slow down to 15 mph below the posted speed limit.",
      "53-feet straight truck.",
      "Tractor with 45-feet trailer.",
      "1 second for each 30 feet of vehicle length.",
      "1 second for each 20 feet of vehicle length.",
      "Should only be used when driving at daytime.",
      "May still be used while driving if you us half of a regular dose.",
      "You should avoid using the brakes until your speed is down to 20 mph.",
      "You should brake in a way that keeps your vehicle in a straight line.",
      "Driving while eating,",
      "Driving at night.",
      "Signal and change lanes to avoid hazard.",
      "Slow down to prevent a crash.",
      "Steer around it and get back in your",
      "Stop quickly and pull to the side of the road.",
      "Hit some object in order to stop your vehicle.",
      "Find an escape ramp in order to exit the roadway.",
      "Cross railway track.",
      "Drive through the mountains.",
      "No, because the other brakes will make up for the air brakes when they are out of adjustment.",
      "It depends on how the brakes are.",
      "The mirrors could be adjusted correctly even if the trailer is not straight.",
      "You should adjust your mirrors while you are driving.",
      "1/4",
      "1/3",
      "Permits less maximum axle weight for the axles that are far apart.",
      "Permits the same maximum axle weight for any axle.",
      "Blind spots.",
      "If your running lights are working.",
      "Prescription or non-prescription drugs are allowed  at any time of driving.",
      "Which of these is true about the use of drug s while driving?",
      "Only with an attempt of a difficult turn use both hands on the wheel.",
      "If you have reached a cruising speed on a highway you can drive with one hand.",
      "Only if you need to park.",
      "Only if you have a trailer on your vehicle.",
      "Using mirrors and turn signals, return when the road is clear.",
      "Ride on shoulder to the next exit and then re-enter the road.",
      "windshield defroster.",
      "Windshield scraper.",
      "Use four-way flashers if it is legal in your state.",
      "Stay on the right side of the road.",
      "Police do not fine them.",
      "They drive rented cars.",
      "Air conditioner use.",
      "High speed driving in order to put more air to the radiator.",
      "Is most often not the responsibility of the driver.",
      "Are needed only if hazardous materials are being hauled.",
      "Better handling",
      "Damage to drive axle tires.",
      "Park where a building or trees shelter our vehicle from the wind.",
      "Increase your speed to put out the flames.",
      "The vehicles tail lights should be kept on to warn other drivers.",
      "You must put out your emergency warning devices within 5 minutes.",
      "Should be supplied with their own tie down devices or locks.",
      "Are not required to be inspected by a driver.",
      "You never need to check the antifreeze in such a system.",
      "The radiator cap can be safely removed,and coolant added while the engine is hot.",
      "While moving at a very low speed.",
      "When backing.",
      "Brake when you exceed safe speed by 5 mph.",
      "Use controlled braking.",
      "Slamming on the brakes hard and making wheels lock up.",
      "Pressing brakes until wheel lock-up occurs, releasing and then reapplying.",
      "Condition of hoses.",
      "Hydraulic brake cylinders leaks.",
      "Covers",
      "Shapes",
      "Electric",
      "Hydraulic",
      "Gross axle weight's",
      "Gross vehicle weight.",
      "At the posted speed.",
      "Whatever speed you feel comfortable with",
      "Most people are more vigilant.",
      "Most hazards are easier to spot at night rather than in the morning.",
      "Back of",
      "To the side of",
      "Hydroplaning.",
      "Extensive brake wear.",
      "Distorted springs are safe as long as they are not broken.",
      "Suspension components should be checked at all axles except for the following unit.",
      "Just one missing leaf in a leaf spring is not dangerous.",
      "Spring hangers that are cracked but still tight are not dangerous.",
      "the person who has Hazmat endorsement drives with you.",
      "The load of the hazardous materials is 26 pounds or less.",
      "2 years",
      "6 months",
      "Any truck carrying any amount of hazardous materials must have placards.",
      "Any public road allows trucks, carrying hazardous materials if they are loaded correctly.",
      "0.02.",
      "0.04.",
      "Using the vehicle emergency brakes.",
      "Pushing down the brake pedal as hard as you can.",
      "Your vehicle is parked by trees.",
      "Park along curb next to another vehicle.",
      "Both.",
      "Total weight of a single vehicle.",
      "The oil pressure gauge should take 3-5 minutes to rise to normal.",
      "The engine temperature gauge will take 3-5 minutes to rise to normal.",
      "3",
      "2",
      "Notify the authorities.",
      "Care for the injured.",
      "Drive on the side of the road, so others can pass your vehicle.",
      "Exit the road until traffic is lighter.",
      "It is illegal to turn off your signal before completing the turn.",
      "Most vehicle have self-canceling signals.",
      "Service brake.",
      "Parking bra",
      "BAC is determined by how fast you drink; how much you drink and how much you eat.",
      "Alcohol goes directly from the stomach to the blood stream",
      "Must be accompanied by the police.",
      "Can only be driven at daylight.",
      "Brake fade is not caused by heat.",
      "Heat increases brake responsiveness as the vehicle moves quickly.",
      "Tire-fixing kit",
      "First-aid kit",
      "Only when defects are noted that are certified to not need repair.",
      "Only when defects are noted that are certified to be repaired.",
      "In the glove compartment, which must be working.",
      "Under the driver seat.",
      "Front wheels slide sideways to try to catch up with the rear wheels.",
      "Locked wheels usually have more traction than rolling wheels.",
      "Offensive",
      "Objective",
      "Wide rounding",
      "Side winding.",
      "If you cross the double tracks too slowly.",
      "You try to shift gear when crossing.",
      "the winter front should be closed tightly.",
      "The engine may overheat if winter-front left open.",
      "Within 20 minutes.",
      "Within 15 minutes",
      "Multi-speed rear axles.",
      "Auxiliary transmission.",
      "The pressure is not to be checked during the trip if it passed the pre-trip inspection.",
      "You do not have to check the hot tires, because the tire is not blown out.",
      "Estimate the height of topped overhead object if it is not posted.",
      "Slow down slightly and try to drive under object.",
      "If a tire is too hot to touch, you should drive on it to cool it off.",
      "A small amount of air could be let out, but air pressure remains stable.",
      "Maximum gvw specified by manufacturer for a single vehicle.",
      "Maximum gvw specified by the manufacturer.",
      "Gross Vehicle Weight Rating",
      "Gross Combination Weight",
      "Ride on shoulder to the next exit and then re-enter the road.",
      "Using mirrors and turn signals, turn sharply to get back to the road.",
    ]


    const arabicAnswers=[
      'البدء في استخدام مكابح الطوارئ.'
      ,'استخدام المكابح بخفة.'

      ,'غيار اعلي مما استخدمته من اجل تسلق المنحدر.'
      ,'نفس الغيار الذي استخدمته من اجل تسلق المنحدر.'

      ,'يمكن قيادة المركبة بأمان في حالة نقص مسمار واحد من مسامير تثبيت العجلة.'
      ,'يمكن استخدام حلقات غلق غير متوافقة علي نفس المركبة.'

      ,'الاطارات المتحيزة , الإشعاعيه يمكن استخدامها معاٌ في نفس المركبة.'
      ,'يمكن استخدام اطارات مقاس 2/32انش بشكل أمان في العجلات الامامية.'

      ,'سوف تذهب الي الامام مباشرة ولكن سوف تلتف اذا تم لف عجلة القيادة.'
      ,'سوف تنزلق الي الجانبين و تلتف الي الخارج.'

      ,'تجنب حارة الطوارئ لأنها غير مصممة للمركبات الثقيلة.'
      ,'محوله انزال جميع العجلات من علي  الرصيف.'

      ,'يمكن نقل حمولة كبيرة الحجم بدون تصريح خاص في الاوقات التي تكون فيها الطرق غير مزدحمة.'
      ,'عندما يتم تحميل سوائل, يجب ملئ الخزان بشكل كامل دائماً.'

      ,'يجب عليك دائما احكام الإمساك بعجلة القيادة بكلتا اليدين.'
      ,'البوق ليس طريقة جيدة من اجل اعلام الاخرين انك موجود.'

      ,'تحميل الحمولة الي اقرب مكان حيث يوجد السائق الذي يحمل تصريح التعامل مع المواد الخطرة.'
      ,'قم بتحميل الحمولة ولكن قم بعمل ابلاغ (DOT) بعد الرحلة.'

      ,'اذا وجب عليك التوقف من اجل اخذ قيلولة, يجب ان تكون في مكان لتوقف شاحنات النقل او مكان استراحة اخر ولا يجوز فعل ذلك علي جانب الطريق.'
      ,'نصف ساعة استراحة من اجل القهوة سوف تكون اكثر افادة من قيلولة مدتها نصف ساعة.'

      ,'تغير ناقل الحركة الي الوضع المحايد سوف يساعد علي اقاف المركبة .'
      ,'المكابح الخاصة بالركن لم تعمل هي الأخري لأنها جزء من نفس النظام الهيدروليكي.'

      ,'ضعف مساحة المركبة .'
      ,'نصف مساحة ملعب كرة قدم.'

      ,'التسريب في نظام العادم اقل خطورة في الاجواء الباردة.'
      ,'لا يمكن ان ترتفع درجة حرارة المحرك في الاجواء الباردة.'

      ,'انظر الي الجانب الايسر من الطريق عندما يكون هناك مركبة قادمة في اتجاهك.'
      ,'عدل سرعتك من اجل ابقاء مسافة التوقف داخل نطاق الرؤية الخاص بك.'

      ,'عند استخدام الدبرياج المزدوج, يجب عليك ان تترك عدد لفات المحرك لينخفض بينما تقوم بترك الدبرياج, و ذراع ناقل الحركة علي الوضع المحايد.'
      ,'عندما تقوم بخفض ناقل الحركة من اجل تلة, يجب عليك فعل ذلك عند البدء اسفل التلة.'

      ,'تشغيل اضاءة المصابيح.'
      ,'بقائه خارج نطاق الرؤية بينما تسير الي موقع الذي سوف تضعه فيه.'

      ,'يري المتعاطي تأثير الكحل عليه بوضوح.'
      ,'تأثير الكحل يتناقص.'

      ,'1) المرآة المحدبة تجعل الاشياء تبدو اكبر و اقرب مما هي عليه في الواقع.'
      ,'3) يجب ان تنظر الي المرآة بضع ثواني علي الأقل.'

      ,'يحدث فقط عندما يكون هناك الكثير من الماء.'
      ,'لا يمكن ان يحدث عند القيادة مروراً ببركة ماء.'

      ,'اشعال إضاءة المكابح.'
      ,'اشر الي من يتبعك عندما يكون من الامن ان يتخطاك.'

      ,'في الخلف.'
      ,'في الامام.'

      ,'5-8 ثانية.'
      ,'18-21 ثانية.'

      ,'ضافة المزيد من القوة الي العجلات.'
      ,'نقل ناقل الحركة الي الأسفل.'

      ,'اضافة قوة كبح اضافية الي محور غير محور القيادة.'
      ,'من اجل المساعدة في تجنب الانزلاق.'

      ,'يشمل النظر الي العجلات لفطرة قصيرة من الزمن.'
      ,'يمكن استخدام اثناء الانعطاف بزاوية حادة.'

      ,'بعد 9 ساعات.'
      ,'بعد 5 ساعات.'

      ,'اذا قام شخص مؤهل بمساعدتهم, لا تقم بأي شيء الا اذا طلب منك ذلك.'
      ,'قم بنقل الاشخاص المصابين بشدة اذا كان هناك خطر نشوب حريق او عبور مرور.'

      ,'الضغط علي كلاً من دواسة المكابح و البنزين بعد الخروج من الماء.'
      ,'تشغيل مدفئة المكابح.'

      ,'يمكن للسائق استخدام وصفات طبية اثناء القيادة.'
      ,'يمكن استخدام "  الأمفيتامين " من اجل ابقاء السائق يقظاً.'

      ,'لان المركبات الثقيلة من السهل رؤيتها, يمكنك الاعتماد علي السائقين الاخرين من اجل الخروج من الطريق او الابطاء من اجلك.'
      ,'افضل طريقة من اجل العبور من الزحام هي محاولة تغيير المسار باستمرار'

      ,'قم بخفض الدبرياج بينما تضغط ببطء علي البنزين.'
      ,'اترك المركبة ترجع الي الخاف بضع اقدام قبل استخدام الدبرياج ولكن ادر عجلة القيادة حتي يمكن لمؤخرة المركبة الخروج من الطريق.'

      ,'ابطئ الي السرعة التي تم نشرها علي المخرج المنحدر المنحني.'
      ,'انتظر حتي تصل الي المنحني قبل انزال ناقل الحركة الي الأسفل.'

      ,'اتجه الي جانب الطريق الايسر.'
      ,'اضغط علي المكابح بقوة.'

      ,'يمكن تصحيح ذلك عن طرق ترك المكابح لمدة 1-2 ثانية و اعادة تكرار ذلك.'
      ,'انها مشكلة تحدث فقط في نوع مكابح الطبل.'

      ,'لا حاجة الي مضادة التجمد عندما يكون الجو دافئ.'
      ,'لا يمكنك ابداً اطفاء محرك ساخن حتي يبرد.'

      ,'يجب ان تفترض ان علامات الارتفاع المنشورة علي الطريق صحيحة.'
      ,'اذا تسبب سطح الطريق في انا تميل مركبتك الي حافة الطريق, يجب عليك ان تقود بالقرب من الحافة.'

      ,'اذا كانت الحمولة في الشاحنة او مقطورة امسكتها النيران, يجب عليك فتح باب الحمولة في اسرع وقت.'
      ,'اذا كان المحرك الخاص بك مشتعل, يجب عليك فتح غطاء المحرك في اسرع وقت.'

      ,'استخدم مسافات اصغر بينك و بين السائقين الأخرين.'
      ,'استخدم المكابح في المنعطفات.'

      ,'سوف تشعر برجرجة اذا كان تسارع المركبة صحيح.'
      ,'عندما يكون العزم ضعيف, المزيد من القوة يجب اضافتها الي التسارع.'

      ,'مكابح الطبلة تبرد سريعةً اذا كانت المركبة تتحرك بسرعة'
      ,'المكابح لديها قوة اقاف اكبر مما هي عليه عندما تسخن'

      ,'طبقة واحدة مفقودة علي الزنبرك الورقي من الممكن ان تكون خطيرة.'
      ,'الطبلة المكسورة يجب ان تستبدل.'

      ,'الضغط بخفة علي البوق.'
      ,'افترض ان السائق الأخر لا يراك.'

      ,'قم بخفض ناقل الحركة.'
      ,'قم برفع قدمك من علي دواسة الوقود و ضعها علي المكابح.'

      ,'لا تستخدمها بدون نقل ناقل الحركة الي الاسفل.'
      ,'فصل مكابح محور التحكم سوف يساعد علي إبقاء المركبة في خط مستقيم اثناء توقف الطوارئ.'

      ,'يجب عليك تفقد الاطارات كل ساعتين او 100 ميل اذا كنت تقود في مناخ حار.'
      ,'ضغط هواء الاطار ينخفض كلما زادت درجة حرارة الاطار.'

      ,'التوقف هو دائماً الخيار الانسب في حالات الطوارئ المرورية.'
      ,'مغادرة الطريق دأماً اكثر خطورة من التصادم بمركبة اخري.'

      ,'حريق ناشب عن كهرباء.'
      ,'حريق البنزين.'

      ,'جدولة الرحلات لسعات انت تكون فيها عادةً نائم.'
      ,'خذ دواء الزكام اذا كنت تعاني الزكام.'

      ,'اضغط علي المكابح بقوة من اجل ابطاء المركبة, ثم انعطف بحدة الي الطريق.'
      ,'اتجه بحدة الي الطريق, ثم اضغط علي المكابح بينما تقوم بتصحيح الاتجاه.'

      ,'كلما كانت مركبتك اخف كلما واجهتك مشاكل اقل فيما يخص الرياح.'
      ,'يجب عليك القيادة بجانب مركبات اخري من اجل التخفيض من قوة الرياح.'

      ,'انظر مباشرة علي الاضاءة القادمة لفطرة قصيرة من الزمن'
      ,'ابقي سرعتك منخفضة بما يناسب القدرة علي التوقف في نطاق الاضاءة'

      ,'3 ثواني.'
      ,'5 ثواني.'

      ,'بكلتا اليدين قربين لبعضهما البعض, بالقرب الي اعلي عجلة القيادة.'
      ,'بكلتا اليدين قريبتين من بعضهما اسفل عجلة القيادة.'

      ,'تفتح نقترب بمسافة 100 قدم من مركبة اخري.'
      ,'يتم تشغيلها عندما يكون سائق قادم لا يقوم بفتح انواره.'

      ,'المركبة تقوم بتحميل مواد خطرة.'
      ,'ان المركبة يتم قيادتها بوسطة طالب قيادة.'

      ,'عزل الاسلاك الكهربائية البالية.'
      ,'مستوي زيت المحرك.'

      ,'نقل ناقل الحركة الي الاسفل من اجل التوقف.'
      ,'ابقي سرعتك متفاوتة بين الحركة و التوقف.'

      ,'45 ميل في الساعة.'
      ,'55 ميل في الساعة.'

      ,'استخدام فرامل عجلة القيادة من اجل تجنب افراط التوجيه'
      ,'لف عجلة القيادة في عكس اتجاه الساعة'

      ,'انه من الآمن ان تدعم في الاتجاه الايمن من المركبة مما هو عليه في اتجاه السائق.'
      ,'المساعدون يجب عليهم ان يكونوا خارج نطاق رؤية السائق و يستخدمه الاشرات الصوتية فقط من اجل التواصل مع السائق.'

      ,'رفع الدواسة قليلاً.'
      ,'الضغط القوي المتتالي ثم تحرير المكابح.'

      ,'انت لست بحاجة الي استخدام إشارة الانعطاف عند تغير  الحارة في الزحام علي طريق اربع حارات سريع.'
      ,'يجب عليك استخدام الاشرات من اجل تميز مركبتك عند ترك الحارة التي تسير فيها.'

      ,'استخدام الدبرياج المزدوج يجب ان يستخدم فقط في الحمولات الثقيلة.'
      ,'الدبرياج المزدوج لا يجب ان يستخدم عندما يكو الطريق زلق.'

      ,'الشاحنات الفارغة داماً تتوقف في مسافة اقل من الشاحنات المحملة بالكامل.'
      ,'يجب عليك تحديد سرعتك التي تمكنك من التوقف في المسافة التي تراها امامك.'

      ,'تعمل عندما تضغط علي دواسة المكابح.'
      ,'يتسبب في تآكل المكابح.'

      ,'ضاعف الضغط علي المكابح.'
      ,'ضاعف الضغط علي المكابح, مع الالتفاف سريعاً في عكس الاتجاه.'

      ,'ابطئ علي الاقل 50% من السرعة الرسمية المشار اليها علي الطريق.'
      ,'حافظ علي نفس السرعة المشار اليها علي الطريق.'

      ,'الشاحنة المحملة.'
      ,'الشاحنة بدون ذيل.'

      ,'4'
      ,'2'

      ,'150'
      ,'100'

      ,'المقطورة.'
      ,'الجرار.'

      ,'0.01'
      ,'0.10'

      ,'في مكان التشغيل.'
      ,'في مقعد السائق.'

      ,'العجلة سوف تتوقف عن الدوران.'
      ,'ضرر لعمود التوجيه.'

      ,'التحدث الي قوة تنفيذ القانون.'
      ,'لتحدث في راديو المواطنين.'

      ,'فطرة احترازية لمدة عام واحد.'
      ,'غرامة 250 دولار.'

      ,'سوف تكون في مشكلة كبيرة مع الموزع الخاص بك.'
      ,'سوف تكون خارج الخدمة لمدة 72 ساعة.'

      ,'الشاحنات الفارغة و المحملة سوف يكون لها نفس مسافة التوقف.'
      ,'اذا قمت بمضاعفة سرعتك, مسافة التوقف سوف تتضاعف الضعف.'

      ,'قم بنقل ناقل الحرقة الي الاسفل و ارفع دواسة المكابح.'
      ,'افعل الامرين.'

      ,'يجب ان يكون مرتفعاً قدر الامكان.'
      ,'المشكلة الوحيدة اذا كانت المركبة ممحلة اكثر مما ينبغي.'

      ,'20'
      ,'15'

      ,'تابع القيادة و قم بتشغيل مذيب الجليد.'
      ,'تابع القيضة و قم برش الزجاج الامامي بسائل الغسيل.'

      ,'قم بوضع المركبة علي وضع الحياد و استخدم مكابح الركن.'
      ,'قم بالضغط علي دواسة المكابح بقدر المستطاع.'

      ,'العجلة تنزلق.'
      ,'صوت صرير مزعج.'

      ,'القيادة الي الاسفل اذا لم يكن المنحدر شديد.'
      ,'قم بإضافة ضغط متواصل علي المكابح اثناء القيادة اسفل المنحدر.'

      ,'لا يوجد رجل العلم, علامات بالية او بوابة عبور متهالكة.'
      ,'العبور في مدينة او بلدة في مكان يتكرر فيه عبور القطار.'

      ,'400'
      ,'300'

      ,'ليس خطيراً اذا كان لديك مساعد.'
      ,'ليس خطيراً اذا كان ليس عليك الانعطاف.'

      ,'وضع علامات الطوارئ المضيئة خلال 30 دقيقة.'
      ,'استخدم اضاءة الذيل من اجل اعطاء السائقين الاخرين اشارة خطر.'

      ,'وضعها في الخلف كما ينبغي أن يكون لكي يراك السائقين الاخرين.'
      ,'في مسافة 200 قدم خلفك.'

      ,'مقطورة.'
      ,'مواد خطرة.'

      ,'من الممكن ان لا تتمكن من دخول الطريق مجدداً بسب الحصي المستخدمة علي جانب الطريق.'
      ,'معظم جانب الطريق ليس قوي بما فيه الكفاية من اجل تحمل مركبة ثقيلة.'

      ,'انزلاق الذيل(ذيل السمكة).'
      ,'التفاف عجلة القيادة.'

      ,'لا تحدث اذا كان لديك اطار اشعاعي.'
      ,'تحدث علي الثلج.'

      ,'اضغط علي المكابح بشكل خفيف من اجل تحذير السائقين خلفك ليذهبوا الي الخلف.'
      ,'قم بزيادة السرعة من اجل زيادة المسافة بينك و بين من يسير خلفك.'

      ,"التوجيه."
      ,"التعليق."
      ," لا شيء."
      ," يجعل سطح الطريق لزج مما يجعل الاطارات تلتصق بالطريق"
      ," انتقل الي الاضاءة المرتفعة من اجل تحسين الرؤية."
      ," لا تقود بشكل بطيء, او من المرجح ان يصطدم بك سائقين اخرين."
      ,"عرض المنحدر."
      ,"وزن الحمولة."
      ," قم بإلغاء مكابح محور التوجيه."
      ," قم بحمل سلاسل الإطارات في المركبة الخاصة بك."
      ,"غير مصممة للشاحنات ذات المقطورات المزدوجة."
      ,"مصممة من اجل ابطاء المركبات من اجل ان يعودوا الي الطريق بالسرعة الامنة."
      ," العنوان بالتحديد ليس مهم اخبرهم فقط بالطريق و المركبات التي كانت في الحادث."
      ," يجب عليك اخبار السلطات قبل القيام بأي شيء اخر."
      ," استخدام التراب."
      ," استخدام الماء."
      ,"الضرر الميكانيكي."
      ,"ضرر الصواميل."
      ,"اضاءة الانعطاف, اضاءة المؤخرة, الإضاءة اعلي المركبة."
      ,"الإضاءة الامامية, اضاءة المكابح, و إضاءة اعلي المركبة."
      ," تهبط مباشرة الي الأرضية."
      ," تنخفض قليلاً."
      ," 25"
      ," 50"
      ,"ابطاء التدافع."
      ,"  فحص الاطار."
      ,"اذا كانت المكابح تعمل, الوزن سوف يكون بلا تأثير علي مسافة التوقف."
      ," الشاحنات المحملة بالكامل تتطلب مسافة أكبر من اجل التوقف, او الحافلات المحملة بالركاب تتطلب مسافة اقل من اجل التوقف من الحافلات التي تكون فارغة."
      ,"ابدأ باستخدام الدبرياج و قم بزيادة التسارع بشكل سريع."
      ," ابقي ذراع مكابح المقطورة مرفوعاً, حتي تقوم بالتسارع الي سرعة 20 ميل في الساعة."
      ," يجب عليك ان يكون لديك مدفأة إضافية مثل مدفأة الزجاج , مدفأة البطارية, او مدفأة خزان الوقود, عندما تنخفض درجات الحرارة الي درجات التجمد."
      ," اذا كنت تشعر بالنعاس, تدفئة الكابينة الخاصة بك بالمدفأة سوف يساعد علي البقاء يقظاً."
      ," يمكن ان يؤدي ذلك الي تلويث الهواء بالدخان المتصاعد من العادم."
      ," سوف يؤذي الضجيج اذن السائق."
      ,"خسارة في قدرة المحرك علي الكبح."
      ," ضرر لنظام ناقل الحركة."
      ," هو الوقت الذي تري فيه العين الخطر, الي الوقت الذي تضغط فيه قدمك علي دواسة المكابح."
      ," هو الوقت الذي يخبر فيه الدماغ القدم ان تضغط علي دواسة المكابح, الي الوقت الذي تستجيب فيه القدم الي ذلك الأمر."
      ,"عادة ما تميل من وقت الي اخر."
      ,"تتطلب الكثير من المساحة من اجل تغير الحارة."
      ,"سيارة شرطة تقترب منك في الاتجاه المقابل."
      ," سائق يقوم بالسير خلف مركبتك."
      ,"الدخول الي اقرب حارة حتي يمكن للمركبات الاخرين ان يعطوك مساحة."
      ," قم بالتسارع علي جانب الطريق ثم قم بالدخول الي الطريق."
      ,"قم بتنظيف الإضاءة الامامية."
      ," قم بتعديل الإضاءة الامامية."
      ," يجب ان تقوم باستخدام مساعد و التواصل معه عن طريق لغة الإشارة."
      ," يجب عليك ان ترجع و تلتف في اتجاه السائق عندما يكون من المسموح فعل ذلك."
      ," ½ المسافة."
      ," 2 المسافة."
      ," يمكنك التوقف اسرع مما يمكنك الانعطاف من اجل تجنب عائق."
      ," التوقف هو أماناً شيء حالة وجود طارئ مروري."
      ," اضغط علي دواسة المكابح بقوة."
      ," الضغط علي الدواسة و الانعطاف بقوة."
      ," يجب ان يتم تفقدها بعد كل مائة ميل او بعد كل ساعتين."
      ," يجب ان يكون عمق مسارات مداس الاطار ضعف ما يتطلب من اجل السير في الأوضاع العادية."
      ,"الأسطوانات المزودة بالغاز المضغوط يجب ان يتم نقلها تحت غطاء اذا كان لا يوجد عليهم علامة."
      ," مثل هذه الحمولة يجب ان يتم تعليمها بعلامة دائرية حجمها أربعة انشات, بالون الأحمر علي الخزان."
      ," جرار يسحب عربة مسطحة عليها حمولة."
      ," عربة ذات ثلاثة عجلات محملة بالبضاعة."
      ," نقص العزم."
      ," المحرك يعمل بشكل انعم."
      ," عزل الاسلاك الكهربائية."
      ," تهوية البضاعة."
      ," فقط عندما تقوم بنقل مواد قابلة للاشتعال."
      ," فقط عند وقو الحريق."
      ," من اجل تجنب المسائلة."
      ,"انه قانون."
      ," وجود زيت علي كوبلن العجلة."
      ," اذا كان هناك دخان رمادي يخرج من العادم."
      ," تجعل الأشياء تبدو اقرب مما هي عليه في الحقيقة."
      ," تجعل الأشياء تبدو اكبر مما هي عليه في الحقيقة."
      ," من اجل المحافظة علي تدفق زيت المحرك."
      ," من اجل المحافظة علي دفء المحرك."
      ," مسافة الاستجابة, مسافة المشاهدة, و مسافة التوقف."
      ," مسافة الانتباه, مسافة رد الفعل, و مسافة الابطا."
      ," ابدأ بالانعطاف في منتصف التقاطع."
      ," استخدم الحارة التي علي الاتجاه الأيمن اذا كان هناك حارتين."
      ," انهم يرون مركبتك."
      ," يعلمون انك تقوم بالتخطي."
      ," افترض ان السائقين الاخرين سوف يسمحون لك بالدخول في المرور."
      ," تفقد المراية من اجل التأكد ان لا شيء سوف يستدم بمؤخرة المركبة"
      ,"قم بالإشارة قبل تغير الحارة و انتقل سريعاً."
      ," قم بالإشارة بعد البدء في التغير و انتقل ببطء."
      ," اعثر علي طريق اخر يكون اكثر اضاءة حتي اذا لم يكن في الطريق الخاص بك."
      ," قم بتشغيل الإضاءة الداخلية الخاصة بك و قم بتعديل اضاءة لوحة العداد."
      ,"حمولة غير متوازنة."
      ," الانعطاف بحدة."
      ," سائقي البريد و سائقي شحنات التسليم محترفين ولا يشكلون خطر."
      ," السائقين الذين يستخدمون الاشرات يجب دائماً الوثق في انهم سوف ينعطفون في اتجه الإشارة."
      ,"الطريق زلق عندما يستمر المطر اكثر مما هو عليه في بداية المطر"
      ," ظروف القيادة تكو اكثر خطراً عندما تنخفض الحرارة الي درجة التجمد."
      ," حمل طفاية حريق ممتلئة بالكامل من المحتمل ان يمنع حريق."
      ," الاطارات الغير منفوخة جيداً لا يمكن ان تتسبب في حرق."
      ," فقط عندما تقوم بالقيادة."
      ," فقط عندما تكون علي الطريق السريع."
      ," امان الحمولة."
      ," كل الأضواء تعمل ام لا؟"
      ," اترك المفتاح في مكان التشغيل حتي لا تفقده بينما انت اسفل الشاحنة."
      ," عندما تقوم بالركن في الشارع يجب عليك ان تمشي بعيداً عن الزحام القادم."
      ," لا."
      ," نعم, لاكن لا يمكنهم وضعك خارج الخدمة."
      ," أقصي وزن يسمح بحمله بواسطة الولاية, يعتبر اماً في كل ظروف القيادة."
      ," يتم تحميل البضاعة بواسطة من يقوم بالشحن, السائق غير مسئول عن الحمولة."
      ," أي المنتجات يمكن ان يتم تحميلها معاً."
      ," متي يستخدم اللافتات المناسبة."
      ," كم يشربوا كحول عادةً."
      ," سنهم."
      ," انت تعطي للسلطات الأذن من اجل تفقد المركبة, من اجل البحث عن الكحل."
      ," من المتفهم انه من المحتمل ان تشرب بعض الكحل من وقت لأخر."
      ,"علي, اقل."
      ," ادني, اكثر."
      ," 4 ثواني من المساحة."
      ," 6 ثواني من المساحة."
      ," قم بتشغيل الإضاءة المرتفعة الخاصة بك بسرعة في اتجه السائق."
      ," ابطء السرعة و انظر امامك في الحراة التي تقود عليها."
      ," الرجوع من اجل السماح للمرور القادم بالعبور."
      ," اكمل الالتفاف بدون التوقف."
      ," ينص القانون علي تشغيل المصابيح الامامية."
      ," ينص القانون علي تشغيل اضاءة الانتظار."
      ," سيارة في الطريق الخاص بك."
      ," انت تريد تغير الحارة."
      ," ليس اقل من 2/32 انش."
      ," اكثر من 6/32 انش."
      ," 1/2"
      ," 1/3"
      ," 1/3"
      ," 1/2"
      ," لا يمكن ان يتحول الي طوارئ."
      ," لا يتاج الي ان يتم رؤيته."
      ," ابطء الي السرعة المشار اليها علي المخرج."
      ," ابطء الي سرعة 15 ميل اقل من السرعة المشار اليها علي الطريق السريع."
      ," عربة واحدة حجمها 53 قدم."
      ," جرار مع مقطورة حجمها 45 قدم."
      ," ثانية 1 لكل 30 قدم."
      ," ثانية 1 لكل 20 قدم."
      ," يجب ان يستخدم فقط عند القيادة في النهار."
      ," يمكن استخدامه اثناء القيادة فقط اذا قمت بأخذ نصف الجرعة."
      ," يجيب عليك تجنب استخدام المكابح حتي تقل سرعتك الي 20 ميل في اساعة."
      ," يجب عليك ان تستخدم المكابح بطريقة تبقي المركبة الخاصة بك في خط مستقيم"
      ," الاكل اثناء القيادة."
      ," القيادة في الليل."
      ," قم بالإشارة و تغير الحارة من اجل تجنب الخطر."
      ," ابطء من اجل تجنب الاصطدام."
      ," قم بالتوجه جانباً و عد بعد ذلك الي الحارة."
      ," توقف بسرعة و توجه الي جانب الطريق."
      ," قم بخبط شيء ما من اجل ابطأ المركبة الخاصة بك."
      ," اعثر علي مخرج طوارئ من اجل الخروج من الطريق."
      ,"عندما تعبر خط السكة الحديد."
      ," عندما تقود في الجبال."
      ," لا, لان المكابح الأخرى سوف تحل محل مكابح الهواء اذا كانت غير معدلة."
      ," يعتمد علي نوعية المكابح."
      ," يمكن تعديل المرايا بشكل صحيح حتي اذا كانت المقطورة غير مستقيمة."
      ," يمكن ان تقوم بتعديل المرايا الخاصة بك اثناء القيادة."
      ," 1/3"
      ," 1/4"
      ,"تسمح بنفس وزن المحور علي كل المحاور."
      ,"تسمح بوزن اقصي اقل لكل المحاور البعيدة عن بعضها البعض."
      ," النقط العمياء."
      ," اذا كانت الإضاءة الخاصة بك تعمل"
      , "يسمح باستخدام الاميفتامين من اجل البقاء يقظا"
      ," الوصفات الطبية و غير الطبية يسمح باستخدامها في أي وقت اثناء القيادة"
      ,"اذا وصلت الي السرعة المناسبة علي الطريق السريع, يمكنك القيادة بيد واحدة."
      ,"فقط في حالات الانعطاف الصعبة يجب عليك استخدام كلتا يديك من اجل امساك العجلة."
      ," فقط اذا كان لديك مقطورة علي المركبة الخاصة بك."
      ," فقط اذا كنت تحتاج الي الركن."
      ," استمر علي كتف الطريق حتي المخرج التالي و عندها قم بالدخول الي الطريق مجدداً"
      ," باستخدام المرايا و اشرات الالتفاف, قم بالعودة الي الطريق عندما يكون فارغً."
      ," ماسح الزجاج الامامي."
      ," مدفئة الزجاج الامامي."
      ," استخدام اضاءة الانتظار اذا كان استخدامها قانوني في الولاية."
      ," ابقي علي الجانب الأيمن من الطريق"
      ,"يقودون سيارات مستأجرة."
      ,"البوليس لا يقوم بتغريمهم."
      ," القيادة بشكل اسرع من اجل توجيه المزيد من الهواء الي الرديتر."
      ," استخدام مكيف الهواء."
      ," في معظم الأحيان هي ليست مسئولية السائق."
      ," تحتاج اليه فقط في حالة تحميل المواد الخطرة."
      ," تحكم افضل."
      ," ضرر لمحور القيادة."
      ," قم بالركن في مكان فيه مباني او شجر من اجل حماية المركبة من الرياح."
      ," قم بزيادة السرعة من اجل إطفاء السنة اللهب."
      ," يجب ان تبقي الاضاءة الخلفية تعمل من اجل تحذير السائقين الاخرين."
      ," يجب عليك وضع اجهزة علامات التحذير خلال 5 دقائق."
      ,"يجب ان يتم تسليمهم بأدوات الربط او الاقفال الخاصة بهم."
      ," من غير المطلوب لن يتم تفقدهم بواسطة السائق."
      ,"لا يجب علي تفقد مضاد التجمد في مثل هذا النظام."
      ," غطي الردياتير يمكن فكه بأمان, و أضافة سائل التبريد بينما المحرك ساخن."
      ,"عند الرجوع الي الخلف."
      ," بينما تتحرك بسرعة منخفضة."
      ," ابطأ عندما تخطي السرعة القصوة ب5 ميل في الساعة"
      ," قم باستخدام المكابح بشكل متحكم فيه."
      ," الضغط علي المكابح بشكل كامل, حتي تتوقف العجلات عن الدوران."
      ," الضغط علي المكابح حتي تتوقف العجلات عن الدوران, و ثم رفع الضغط مع تكرار ذلك."
      ," حالة الخراطيم."
      ," تفقد اسطوانة المكابح الهيدروليكية من التسريب."
      ," الاغطية."
      ," الاشكال."
      ," الكهربائية."
      ," الهيدروليكية."
      ,"  وزن المحور."
      ,"  وزن المركبة الإجمالي."
      ," أي سرعة تشعرك بالارتياح."
      ," علي نفس السرعة المشار اليها علي الطريق."
      ," معظم الناس يكونوا يقظين اكثر في الليل من النهار."
      ,"  معظم المخاطر من الاسهل رؤيتها اثناء الليل مما هو عليه اثناء النهار."
      ,"خلف مركبتك."
      ," بجانب مركبتك."
      ," سوف تنزلق المركبة."
      ," سوف تتأكل المكابح بشكل اسرع."
      ," المساعدين التي لا تعمل بشكل جيد من الامن استخدامها طالما ليست مكسورة."
      ," أجزاء نظام التعليق يجب فحصها علي كل المحاور باستثناء الوحدة التالية."
      ," اذا كان المكان الذي يوجد به المساعد متشقق ولكن مذال يحافظ علي شكله فلا يعد هذا خطيراً."
      ," اذا كان هناك طبقة مفقودة من الزنبرك الورقي فهذا ليس خطيراً."
      ," اذا كان الشخص الذي يحمل ترخيص التعامل مع المواد الخطيرة يقود معك."
      ," اذا كانت حمولة المواد الخطيرة هي 26 بوند او اقل."
      ,"  2 سنة."
      ,"  6 اشهر."
      ,"   أي شاحنة تحمل أي كمية من المواد الخطيرة يجب ان يكون عليها لافتات."
      ,"   أي طريق عام يسمح للشحنات, ان تحمل مواد خطيرة اذا تم تحميل المواد بشكل صحيح."
      ,"0.02"
      ,"0.04"
      ," استخدام مكابح الطوارئ الخاصة بالمركبة."
      ," الضغط علي دواسة المكابح بقدر المستطاع."
      ,"ركن المركبة بجانب الشجر."
      ," اركن المركبة علي طول الرصيف بجانب مركبة اخري."
      ,"  كلاهما."
      ,"  الوزن الإجمالي لمركبة واحدة."
      ,"   مؤشر ضغط الزيت يجب ان يأخذ من 3-5 دقائق من اجل ان يصل الي المستوي الطبيعي."
      ,"   مؤشر درجة حرارة المحرك سوف يتطلب من 3-5 دقائق من اجل الوصول الي المستوي الطبيعي."
      ,"    3 اضعاف."
      ,"    2 اضعاف."
      ," اخبر السلطات."
      ," قم برعاية المصابين."
      ," اخرج من الطريق حتي يقل الزحام."
      ," قم بالقيادة علي جانب الطريق, حتي يتمكن الاخرين من تخطي مركبتك."
      ,"  انه من غير القانوني إطفاء اضاءة الإشارة بدون اكمال الانعطاف."
      ,"  معظم المركبات لديها نظام الغاء اشرة آلي."
      ," مكابح الخدمة."
      ," مكابح الركن."
      ," (BAC) اختبار تركيز الكحول في الدم يتم معرفته عن طريق معرفة سرعة استهلاك الكحول, و الكمية المستهلكة من الكحول, وكمية الطعام."
      ," يذهب الكحول من المعدة الي مجري الدم يشكل مباشر."
      ," يجب ان يتم مرافقته بواسطة الشرطة."
      ," يجب ان يتم قيادتها خلال ضوء النهار."
      ,"  الحرارة تضاعف استجابة المكابح, بينما تتحرك المكربة بسرعة."
      ,"  تأكل المكابح, ليس المتسبب به الحرارة."
      ," عدة اصلح الاطار."
      ," المسعدات الأولية."
      ,"  فقط عادما يكون العيب لا يحتاج الي صيانة."
      ,"  فقط اذا كان العيب قابل للصيانة."
      ," في الجزء المخصص للقفزات, الذي يجب ان يكو يعمل."
      ," تحت مقعد السائق."
      ," العجلات المتوقفة عادة ما يكون لديها عزم اكبر من العجلة المتحركة."
      ," العجلات الامامية سوف تنزلق الي الجانب, من اجل اللحاق بالعجلات الخلفية"
      ,"  القيادة الهجومية."
      ,"  القيادة الموضوعية."
      ,"   الالتفاف الجانب."
      ,"   الالتفاف الوساع."
      ," محاولة تغير الغيار اثناء العبور."
      ," اذا قمت بتخطي خطي السكة الحديد ببطء."
      ," من المرجح ان تزداد حرارة المحرك (winter-front) اذا تم تركه مفتوح."
      ," (winter-front) يجب ان يتم اغلاقه جيداً."
      ," خلال 20 دقيقة."
      ," خلال 15 دقيقة."
      ," ناقل حركة المزدوج."
      ," ناقل غيارات يدوي متعدد السرعات."
      ," لا حاجة الي تفقد الاطار في اثناء الرحلة, اذا قمت بتفقده في فحص ما قبل الرحلة ."
      ," انت لست بحاجة الي تفقد اطر ساخن, لأن الاطار لم ينفجر."
      ," خمن المسافة المتاحة اعلي المركبة اذا كانت غير منشورة علي الطريق."
      ," ابطأ كليلاً و حاول القيادة اسفل الجسم."
      ,"  كمية صغيرة من الهواء من الممكن ان تخرج م الاطار, لاكن ضغط الهواء يبقي مستقر."
      ,"  اذا كان هناك اطار ساخن الي درجة انه لا يمكن لمسه, يجب عليك القيادة من اجل تبريده."
      ," اقصي (GVW) يتم تحديده عن طريق المصنع لمركبة واحدة."
      ," اقصي (GVW) يتم تحديده بواسطة المصنع."
      ," تصنيف الوزن الإجمالي للمركبة."
      ," اجمالي مجموع الاوزان."
      ," استمر بالقيادة علي جانب الطريق, ثم بعد ذلك انتقل الي جانب الطريق."
      ," استخدم المرايا و اشرات الالتفاف, انعطف بشدة من اجل الانتقال الي الطريق من جديد."



    ]




    if(englishAnswers.length!==arabicAnswers.length){
      console.log(englishAnswers.length,arabicAnswers.length)
      throw new Error("mismatch between arrays")
    }

    const answers = englishAnswers.map((text,i)=>({
      questionId: null,
      answerText:text,
      answerTextAr:arabicAnswers[i],
    }))

    // @ts-ignore
    await Answer.createMany(answers)
  }
}
