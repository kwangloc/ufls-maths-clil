(() => {
  const addWorksheet = (id, title, items) => {
    window.WORKSHEET_SETS[id] = {
      title,
      questions: items.map(([number, prompt, draw]) => ({
        number,
        prompt,
        ...(draw ? { drawing: { background: "grid" } } : {}),
      })),
    };
  };

  addWorksheet("lesson-23", "Lesson 23: Extending Fractions. Equal Fractions", [
    ["6.1", "What fraction does the shaded part of each figure below show? See the figures in the original PDF (open Print / Save as PDF above).", true],
    ["6.2", "Write the following divisions as fractions: (a) (−19) : 6; (b) (−7) : (−10)."],
    ["6.3", "Write the following measures as fractions in simplest form, using the given unit: (a) metres: 25 cm; 60 mm; (b) square metres: 25 cm²; 45 dm²."],
    ["6.4", "Use the basic property of fractions to explain why each pair of fractions is equal: (a) 15/6 = 35/14; (b) −21/30 = −35/50."],
    ["6.5", "Use the rule for equal fractions to explain why each pair of fractions is equal: (a) 4/9 = 16/36; (b) −10/14 = −15/21."],
    ["6.6", "Find the integers x and y such that −2/5 = x/30 = 14/y."],
    ["6.7", "Simplify the following fractions: (a) (3³ · 5²)/(3² · 5³); (b) −(2 · 5 · 7²)/(5² · 7³)."],
    ["6.8", "Which of the following fractions are in simplest form? Simplify those that are not: −42/56; 19/31; 12/(−27)."],
    ["6.9", "The frequencies of musical notes in hertz (Hz) are shown in the original PDF. Write the fraction showing the ratio between the frequency of note C (Do) and note G (Sol), then simplify it to its simplest form. Open Print / Save as PDF above to see the frequencies."],
    ["6.10", "Write all the fractions equal to 21/39 whose numerator and denominator are two-digit natural numbers."],
  ]);

  addWorksheet("lesson-24", "Lesson 24: Comparing Fractions. Positive Mixed Numbers", [
    ["6.11", "Write the following fractions as mixed numbers: (a) 38/9; (b) 67/12."],
    ["6.12", "Write the following mixed numbers as fractions: (a) 5 2/5; (b) 12 5/7."],
    ["6.13", "The fractions below follow a pattern. Write them with a common denominator to find the pattern, then write the next fraction: (a) 1/4; 1/5; 3/20; 1/10; … (b) 1/8; 5/48; 1/12; 1/16; …"],
    ["6.14", "Write the following fractions with a common denominator: (a) 5/180 and −1/270; (b) −5/6; 7/10 and 4/15."],
    ["6.15", "Simplify, then write the following fractions with a common denominator: (a) (31 − 7)/48 and (36 − 60)/40; (b) (16 + 12)/24 and (21 − 45)/36."],
    ["6.16", "Compare the fractions: (a) 7/12 and 9/16; (b) −4/15 and −3/10."],
    ["6.17", "Việt loves cycling at the weekend. On Saturday he rode 37 km in 3 hours. On Sunday he rode 49 km in 4 hours. On which day did Việt ride faster?"],
    ["6.18", "Arrange the following fractions in order from smallest to largest: −1/6; −7/30; 5/12; −4/9; 3/4."],
    ["6.19", "A food shop sells a kind of sausage at these prices: one pack: 30,000 dong; two packs: 55,000 dong; three packs: 78,000 dong. Today Mai goes to the market with her mother. Her mother says that buying three packs is the cheapest. Explain why."],
    ["6.20", "Find the natural numbers x such that 1/6 ≤ x/48 < 1/4."],
  ]);

  addWorksheet("lesson-25", "Lesson 25: Addition and Subtraction of Fractions", [
    ["6.21", "Fill in the table. For each column, calculate a + b and a − b.\na: 2/7, 13/19, 5/6, −5/24, 3/4\nb: 5/7, −25/19, 3/8, 7/36, 7/6"],
    ["6.22", "Calculate: (a) 2/3 + 1/6 + (−5/18); (b) −4/9 − 5/6 + 1/18."],
    ["6.23", "Hà plans to make a small cake. She needs 5/6 of a cup of flour, but there is only about 1/4 of a cup of flour left in the bag. How much more flour does Hà need to make the cake?"],
    ["6.24", "Calculate in a smart way: (a) A = −4/9 + 5/13 + (−5/9) + 1/3 + 8/13; (b) B = 7/15 + (−9/23) + (−2/5) + 8/15 − 37/23."],
    ["6.25", "Find x, given: (a) 7/11 − x = −4/11; (b) x + (−8/17) = −25/17."],
    ["6.26", "Three people do the same job. Working alone, the first person needs 4 hours, the second needs 6 hours and the third needs 12 hours to finish the job. If all three work together, what fraction of the job do they finish in one hour?"],
    ["6.27", "During a holiday, Việt and his family travelled to Đà Nẵng. They went by coach from Hà Nội to Đồng Hới (Quảng Bình) in 9 1/2 hours, took a short rest, then continued from Đồng Hới to Đà Nẵng in 4 3/8 hours. How long did the travelling take in total (not counting the rest)?"],
    ["6.28", "Find the perimeter of a triangle whose sides are 3 1/2 cm, 2 3/4 cm and 2 1/6 cm long."],
    ["6.29", "Fill in the empty circles with suitable fractions to complete the diagram. The number in each circle is the sum of the two numbers next to it in the row below. See the diagram in the original PDF (open Print / Save as PDF above).", true],
    ["6.30", "This is the only piece left of an old document. Restore the three lines before these lines and the three lines after them, following the pattern of the three remaining lines. See the original document fragment in the PDF (open Print / Save as PDF above).", true],
  ]);

  addWorksheet("lesson-26", "Lesson 26: Multiplication and Division of Fractions", [
    ["6.31", "Fill in the table by calculating a · b in each column.\na: 5/9, −28/15, −11/18, 0, −2026/2025\nb: −3/5, −25/14, 9/22, −200/173, −2025/2026"],
    ["6.32", "Fill in the table by calculating a : b in each column. Column 1: a = 5/9, b = ?, a : b = −2. Column 2: a = ?, b = 7/6, a : b = −4/7. Column 3: a = −15/8, b = −25/12, a : b = ?. Column 4: a = ?, b = ?, a : b = 6/5. Column 5: a = 9/10, b = ?, a : b = 0. Column 6: a = ?, b = 4/5, a : b = ?."],
    ["6.33", "Calculate the value of each expression: (a) A = (−8/15) · (5/13) · (15/8) · (−26); (b) B = (−4/9) · (5/11) · (−9/4) · (−33)."],
    ["6.34", "It is estimated that the total amount of water on Earth is about 1,380 million km³. About 97/100 of it is salt water (not drinkable) and 3/100 is fresh water. Of the fresh water, about 2/3 is ice in glaciers and at the poles, and 1/3 is groundwater and surface water. Estimate the amount of water on Earth that is ice in glaciers and at the poles."],
    ["6.35", "Today, about 2/5 of the land area of Việt Nam is covered by forest. About 7/10 of the forest area is natural forest; the rest is planted forest. (a) What fraction of the land area of Việt Nam is planted forest? (b) The planted forest area is what fraction of the natural forest area?"],
    ["6.36", "Calculate the value of each expression: (a) A = (3/4 + 1/6 − 5/12) : (1/4 + 1/3 − 1/2); (b) B = 1/3 · 3/4 + 5/8 : 5/6 − 1/12."],
    ["6.37", "Calculate in a smart way: (a) A = 12/13 + 1/13 · 4/13 + 1/13 · 9/13; (b) B = 4/9 · 50/13 − 4/13 · 113/9."],
    ["6.38", "On Sunday morning, Tuấn and Hà walk around a lake in the park. At 6:00, Tuấn starts walking from the park gate at 4 km/h. At 6:06, Hà also starts walking from the park gate at 9/2 km/h, but in the opposite direction. They meet at the café by the lake at 6:18. Find the length of the path around the lake."],
    ["6.39", "According to a study by American scientists (American College of Sports Medicine), a person with normal activity needs this amount of water each day (in millilitres): weight (in kg) × 30. If you exercise, you need to drink about 355 ml more water for every 30 minutes of exercise. How many litres of water does a person who weighs 55 kg and exercises for 60 minutes a day need to drink each day?"],
    ["6.40", "Calculate the value of A = 10 · (a + b) − a · b, where a = 3/4 and b = 2/5."],
    ["6.41", "Find the missing measures in the figures below. See the figures in the original PDF (open Print / Save as PDF above).", true],
  ]);

  addWorksheet("lesson-27", "Lesson 27: Two Problems about Fractions", [
    ["6.42", "Calculate: (a) 1/8 of 72; (b) 3/7 of 98/9."],
    ["6.43", "Find the number, given: (a) 3/4 of the number is 48; (b) 35 is 5/8 of the number."],
    ["6.44", "(a) What fraction of the class are boys, given that 5/9 of the class are girls? (b) 2/5 of the speed of a motorbike is equal to 3/8 of the speed of a car. The speed of the motorbike is what fraction of the speed of the car?"],
    ["6.45", "Tickets for a football final were sold at the stadium and online. All the online tickets were sold out in three hours: 1/4 of the tickets were sold in the first hour; in the second hour, the number sold was 5/11 of the total number sold in the first and the third hours. In which hour were the fewest tickets sold online, and in which hour were the most sold?"],
    ["6.46", "A man borrows some money from a bank and plans to pay it all back in four instalments. Counting only the money borrowed, he plans to pay 1/5 of the loan in the first instalment; 1/4 of the remaining amount in the second instalment; 1/3 of the amount still remaining after two instalments in the third instalment. In the last instalment he only has to pay 140 million dong. How much money did he borrow?"],
    ["6.47", "A boarding school for ethnic minority students in a mountain province has 360 students from three ethnic groups: Thái, Tày and Dao. The number of Dao students is 1/12 of all the students in the school. The number of Thái students is 3/5 of the total number of Tày and Dao students. (a) Find the number of Dao students and the number of Thái students in the school. (b) The number of Tày students is what fraction of all the students in the school?"],
  ]);

  addWorksheet("lesson-28", "Lesson 28: Decimals", [
    ["7.1", "(a) Write the following fractions as decimals: 47/1,000; −263/10; −389/100; 25,417/100. (b) Find the opposite of each decimal you wrote in part (a)."],
    ["7.2", "(a) Write the following decimals as decimal fractions: 3.25; −7.845; −15.06; 0.075. (b) Write the following fractions as decimal fractions and as decimals: 17/4; −3/8; −7/40; 13/(−125)."],
    ["7.3", "Compare the following numbers: (a) 7.35 and 0.976; (b) −312.045 and 18.9978; (c) −4.7068 and −4.7059."],
    ["7.4", "Find the integers x such that 312.15 < x < 316.8."],
    ["7.5", "Find the set of decimals x with one digit after the decimal point such that: (a) x is between 4.18 and 4.52; (b) −6.73 < x < −6.35."],
    ["7.6", "The changes in the number of visitors to nine museums this year compared with last year (in %) are: Museum A: 12.5; B: −3.4; C: 8.25; D: −11.6; E: 15.08; F: 0.75; G: −0.9; H: 20.3; I: 9.75. Arrange the changes from the highest to the lowest."],
    ["7.7", "Find all pairs of digits (a; b) such that 4.6183 < 4.6ab2 < 4.63."],
  ]);

  addWorksheet("lesson-29", "Lesson 29: Calculations with Decimals", [
    ["7.8", "Calculate: (a) 43.18 − 86.52; (b) 72.36 + (−91.27); (c) (−3.45) + 8.72; (d) (−74.6) + (−25.8); (e) (−3.84) − (−36.5); (f) (−87.3) + 4.62."],
    ["7.9", "Calculate: (a) (−42.5) · 3.2; (b) 3.6 · (−4.5); (c) (−2.75) · (−0.32); (d) (−9.072) : 2.8; (e) (−5.265) : (−1.3); (f) 71.76 : (−4.6)."],
    ["7.10", "Calculate mentally: (a) (−47.6) · 0.01; (b) (−3.826) : (−0.001); (c) (−5.437) : 0.1; (d) 218.05 · (−0.01)."],
    ["7.11", "Use the rules for removing brackets to calculate the sums: (a) (−7.5) + 18.45 + (−2.5) − (−3.55); (b) 6.27 + (−3.45) − (−7.38) + 8.62 − 12.55."],
    ["7.12", "Calculate in a smart way: (a) 42.5 · 42.5 + 85 · 57.5 + 57.5 · 57.5; (b) 9.5 · 9.5 − 2 · 9.5 · 4.5 + 4.5 · 4.5."],
    ["7.13", "Calculate the value of each expression: (a) 0.125 · 472 + (−47.2) : 4; (b) (−30) · 4.2 − 8.4 : 4 + 4.2 · (3.5 · 6 − 4.1); (c) (x + 15.48) · (−10) + 154.8 when x = −2.37."],
    ["7.14", "Three water factories produce on average 12.456; 9.5 and 8.07 thousand bottles of water per day. How many bottles of water do the three factories produce per day in total?"],
    ["7.15", "A family puts 180 kg of salt into bags. Each bag holds 0.75 kg of salt. How many bags of salt can the family fill?"],
    ["7.16", "A phone shows a city's weather forecast in degrees Fahrenheit (°F). Convert °F into °C using C = (F − 32) : 1.8. For example, 86°F is (86 − 32) : 1.8 = 30°C. Forecast (highest / lowest): Today 86° / 57°; Thursday 68° / 50°; Friday 66° / 47°; Saturday 70° / 52°. (a) What is today's lowest temperature in °C (round to the units digit)? (b) What are the forecast highest and lowest temperatures on Friday in °C? Use a calculator and round to the units digit."],
    ["7.17", "Fill in each empty box with a suitable digit to make the addition correct: □.6□ + 7.58 = 11.□3."],
  ]);

  addWorksheet("lesson-30", "Lesson 30: Rounding and Estimating", [
    ["7.18", "Round: (a) 238.5731 to the tenths; (b) 6,234.8462 to the hundredths; (c) 32.48563 to the thousandths; (d) 6,239.866 to the tens."],
    ["7.19", "Nam calculated the value of (4.96 + 3.82) · 5.13 and got 54.67. Estimate the value of the expression and decide whether Nam is right or wrong."],
    ["7.20", "To make 1 tonne of paper pulp, we need from 2.2 to 4.4 tonnes of wood, or 1.4 tonnes of waste paper. For every 1.4 tonnes of waste paper collected and used to make pulp, we save at least: 2.2 tonnes of wood; 4,000 kWh of electricity; 40 thousand litres of water; 600 litres of crude oil. Suppose 5.6 million secondary school students each collect 3 kg of waste paper for making pulp. At least how many tonnes of wood, how many kWh of electricity, how many litres of water and how many litres of crude oil will be saved?"],
    ["7.21", "A commune has about 92.6 ha of farmland. This summer, the commune plans to use 3/7 of this area to grow rice. Find the area for growing rice (use a calculator and round the result to the third decimal place)."],
    ["7.22", "In the first 8 months of this year, the export value of a province was 12.36 billion USD, which is about 1,034/1,000 of the value in the same period last year. Find the export value of the province in the first 8 months of last year (use a calculator and round the result to the units digit)."],
    ["7.23", "This year, the rice-growing area of a district is 4,528.6 ha, a decrease of 23/1,000 compared with last year. Find the rice-growing area of the district last year in hectares (use a calculator and round the result to the units digit)."],
  ]);

  addWorksheet("lesson-31", "Lesson 31: Some Problems about Ratios and Percentages", [
    ["7.24", "Write each ratio as a percentage: (a) 7/4; (b) 13/25; (c) 18.6/1.5."],
    ["7.25", "Calculate: (a) 35% of 240; (b) 12% of 36.5; (c) 3.5% of −60."],
    ["7.26", "The list price (without tax) of a refrigerator in an electronics shop is 8.499 million dong. When paying, Mr An must also pay VAT, which is 10% of the list price. How much does Mr An pay for this refrigerator?"],
    ["7.27", "During a sale, a shop reduced the price of a pair of shoes from 450,000 dong to 315,000 dong. By what percentage was the price reduced?"],
    ["7.28", "A blender has a list price of 640 thousand dong. During a promotion, its price is reduced by 15%. Find the new price of the blender."],
    ["7.29", "The water of a very salty lake is so salty that people can float on it easily. One litre of this lake water weighs 1,200 g and contains 300 g of salt. Find the percentage of salt in the lake water."],
    ["7.30", "When water freezes, its volume increases by 9%. What is the volume of the ice we get when 340 cm³ of water freezes?"],
    ["7.31", "A piece of meat taken out of the freezer weighs 3.2 kg. After it thaws, its mass decreases by 6%. Find the mass of the meat after thawing."],
    ["7.32", "A copper bar is 5.4 m long. When it is heated, the copper expands and the length of the bar increases by 1.5%. Find the length of the bar after it is heated."],
    ["7.33", "A mobile phone costs 4,590,000 dong. The buyer can pay the full 4,590,000 dong at once, or pay 30% of the price first and then pay 560,000 dong a month for 6 months. Which way of paying costs more?"],
    ["7.34", "The percentage concentration of salt water is the ratio (in %) of the number of grams of salt to the number of grams of salt water. If we add 40 g of salt to 360 g of salt water with a concentration of 10%, what is the concentration of the new salt water?"],
  ]);

  addWorksheet("lesson-32", "Lesson 32: Points and Lines", [
    ["8.1", "Look at Figure 8.8 in the original PDF. Use symbols to answer: point E lies on which lines and does not lie on which lines?"],
    ["8.2", "Look at Figure 8.8 in the original PDF. Give another name for line AB."],
    ["8.3", "Look at Figure 8.8 in the original PDF. Which lines does line d cut? In each case, name the point where they meet."],
    ["8.4", "Look at Figure 8.8 in the original PDF. Are lines d₁ and d₂ parallel? Why?"],
    ["8.5", "Draw a figure showing the relations: line m and two points P ∈ m and Q ∉ m.", true],
    ["8.6", "Draw a figure showing the relations: two lines p, q and two points E, F such that E ∈ p, E ∈ q, F ∈ q.", true],
    ["8.7", "Draw a figure showing the relations: three lines a, b, c all pass through point O; three points A ∈ a, B ∈ b and C ∈ c are collinear.", true],
    ["8.8", "Copy Figure 8.9 from the original PDF into your notebook and draw the lines MR, NQ, NS, RP, MS and QP.", true],
    ["8.9", "Using Figure 8.9 from the original PDF, find point I where MR and NQ meet, point J where NS and RP meet, and point K where MS and QP meet.", true],
    ["8.10", "Check whether the three points I, J and K in Exercise 8.9 are collinear. How did you check?"],
    ["8.11", "Look at Figure 8.10 in the original PDF. (a) Check whether lines MN and QP are parallel. Do the same for lines MQ and NP. (b) Find point O such that M, O, P are collinear and N, O, Q are also collinear.", true],
    ["8.12", "Draw three lines that meet in pairs but do not all pass through one point. Count the points where they meet.", true],
    ["8.13", "Draw four lines that meet in pairs, where no three lines pass through the same point. Count the points where they meet.", true],
    ["8.14", "Draw five lines that meet in pairs, where no three lines pass through the same point. Count the points where they meet.", true],
    ["8.15", "Given two lines p, q and two points E, F that are not on these lines. Find point M on line p and point N on line q such that the four points M, N, E, F all lie on one line. When is it impossible to find such points M and N?"],
  ]);

  addWorksheet("lesson-33", "Lesson 33: A Point between Two Points. Rays", [
    ["8.16", "Given two points M and N on line xy, draw the figure and name the rays you see in it.", true],
    ["8.17", "Given two points M and N on line xy, name the pairs of opposite rays.", true],
    ["8.18", "Suppose ray Mx is the same as ray MN (another name for ray MN). Draw the figure and say which ray is the same as ray NM.", true],
    ["8.19", "Given three points M, N and P on line xy, draw the figure and name the rays you see in it (list rays that are the same only once).", true],
    ["8.20", "Suppose MN and MP are opposite rays. Draw the figure and say which of the three points M, N, P lies between the other two.", true],
    ["8.21", "Suppose point N lies on ray My and N lies between M and P. Draw the figure and say what other names ray My has.", true],
    ["8.22", "Given ray Oy and two points E, F different from O. Suppose E lies on ray Oy and F lies on the ray opposite to ray Oy. Which of the three points E, F and O lies between the other two?", true],
    ["8.23", "Suppose point O lies between points E and F. If E is on ray Oy, which statement is correct: (a) F lies on ray Oy; (b) F lies on the ray opposite to ray Oy?"],
    ["8.24", "If H and K are two different points, draw the set S = {X | X is point H, or X is point K, or X is a point on the same side of H as K}.", true],
    ["8.25", "If H and K are two different points, draw the set T = {X | X is point H, or X is a point on the other side of H from K}.", true],
  ]);

  addWorksheet("lesson-34", "Lesson 34: Segments. The Length of a Segment", [
    ["8.26", "Look at Figure 8.20 in the original PDF. Use a compass to check whether the segments in each pair are equal: EF and GH; EH and FG."],
    ["8.27", "Look at Figure 8.20 in the original PDF. Use a ruler to measure the lengths of segments OE, OF, OG and OH (in millimetres). What do you notice about the lengths you measured?"],
    ["8.28", "Two points A and B are 12 cm apart. If we choose a segment 3 cm long as the unit of length, how many of these units long is segment AB?"],
    ["8.29", "Given segment OA = 8 cm. Find (by drawing) the position of point B on line OA such that B is 5 cm from A in each case: (a) points O and B are on the same side of point A; (b) points O and B are on different sides of point A.", true],
    ["8.30", "Let S be a point on segment PQ. Find the length of PQ if PS = 4 cm and SQ = 7 cm."],
    ["8.31", "Let M be a point on segment EF. Compare segments EM and MF, given that EF = 12 cm and MF = 6 cm."],
    ["8.32", "M and N both lie between points E and F. Find the length of segment MN, given EF = 15 cm, EM = 5 cm and NF = 4 cm."],
    ["8.33", "Nam uses a 1.2 m stick to measure the width of his classroom. After placing the stick 6 times in a row, the distance left between the end of the stick and the wall is 0.8 m. About how many metres wide is the classroom?"],
    ["8.34", "Among three collinear points, there is always one point between the other two. Suppose A, B, C are three collinear points. If AC = AB + BC, which point lies between the other two?"],
    ["8.35", "Suppose A, B and C are three collinear points with AB = 4 cm, BC = 3 cm and AC = 7 cm. Draw the figure and say which point lies between the other two.", true],
  ]);

  addWorksheet("lesson-35", "Lesson 35: The Midpoint of a Segment", [
    ["8.36", "Find the length of segment AB, given that I is the midpoint of AB and AI = 9 cm."],
    ["8.37", "Point C lies between points A and B, and I is the midpoint of segment BC. Find the length of AB, given AC = 4 cm and CI = 6 cm."],
    ["8.38", "Hương's house is 2,600 m from her school. Every day on the way to school, she passes a supermarket and then a cake shop, which is about 600 m from the school. How far is it from the supermarket to the cake shop, given that the supermarket is exactly halfway between Hương's house and the school? See the figure in the original PDF."],
    ["8.39", "Given segment BC = 6 cm. Let A be a point not on line BC and D a point on ray AB, different from A and B. (a) Draw the figure and mark the midpoint I of segment BC. (b) Draw line d through D parallel to BC. Suppose line d cuts AC at E. Let J be the point where line AI meets DE. Use a compass to check that J is also the midpoint of segment DE.", true],
    ["8.40", "Given segment MN. Let P and Q be two different points between M and N such that MP = QN. Let I be the midpoint of segment MN. When drawing, Quang said that point P is the same as point I. Is Quang right?"],
  ]);

  addWorksheet("lesson-36", "Lesson 36: Angles", [
    ["8.41", "Look at Figure 8.28 in the original PDF. Name the angles you see in the figure. Which one is a straight angle?"],
    ["8.42", "Look at Figure 8.28 in the original PDF. What do you notice about the sides of the two angles mOx and mOy?"],
    ["8.43", "Look at Figure 8.28 in the original PDF. Can a point inside angle mOx also be inside angle mOy? Make a similar remark about the points inside angle mOy."],
    ["8.44", "Let E be any point inside angle xOy (not a straight angle). On ray OE, take any point M different from O. (a) Draw the figure and say whether M is a point inside angle xOy. (b) Fill in the blanks: “If ray OE contains a ______ of angle xOy, then every point of ray OE other than O is a ______ of angle xOy.”", true],
    ["8.45", "Draw angle xOy and a point N inside it. Through N, draw a line that cuts the two sides of the angle at P and Q, with P ∈ Ox and Q ∈ Oy. Which of the three points P, Q and N lies between the other two?", true],
    ["8.46", "On the two sides of angle xOy, take two points P and Q different from O such that P ∈ Ox and Q ∈ Oy. Let N be any point between P and Q. Is N a point inside angle xOy?"],
    ["8.47", "From Exercises 8.45 and 8.46, what do you notice about the relationship between the two ideas: “a point inside an angle” and “a point between two points”?"],
  ]);

  addWorksheet("lesson-37", "Lesson 37: Measuring Angles", [
    ["8.48", "Draw angle xOy measuring 50°, then draw ray Ox′ opposite to ray Ox and ray Oy′ opposite to ray Oy.", true],
    ["8.49", "Name all 4 angles with vertex O (not counting straight angles)."],
    ["8.50", "Use a protractor to measure the 4 angles in Exercise 8.49, then write the pairs of equal angles. Which of these angles are acute? Which are obtuse?"],
    ["8.51", "Look at Figure 8.30 in the original PDF. Measure the angles ABC, ACB and BAC of triangle ABC, then arrange them from the largest to the smallest."],
    ["8.52", "Look at Figure 8.30 in the original PDF. Find the sum of the measures of the three angles ABC, ACB and BAC."],
    ["8.53", "Hùng places a protractor so that its centre is at the vertex O of angle xOy. He sees that side Ox passes through the mark 120 on the inner scale, and side Oy passes through the mark 145 on the outer scale. What is the measure of angle xOy? Hint: the two numbers at the same mark on the two scales always add up to 180°."],
  ]);

  addWorksheet("lesson-38", "Lesson 38: Data and Collecting Data", [
    ["9.1", "Write down the birth months of the members of your family. Is the list of data you get numerical data?"],
    ["9.2", "Observe and list: (a) the pets in your house or a friend's house; (b) the kinds of flowers you see on your way to school."],
    ["9.3", "Lan heats some water and measures its temperature at some times after she starts heating it. Minutes: 4, 5, 6, 7, 8, 9, 10. Temperature (°C): 38, 62, 75, 88, 96, 100, 112. (a) How did Lan collect these data: by observation, by doing an experiment or by using a questionnaire? (b) Find the unreasonable values (if any) in Lan's data about the water temperature. Explain."],
    ["9.4", "Bình measures the density of a pebble (in kg/m³) five times and writes down the results: 2,640; 2,715; 2,580; 2,690; 450. (a) Are Bình's data numerical data? (b) The density of water is 1,000 kg/m³ and the pebble sinks in water. Which of Bình's values is unreasonable? Why?"],
    ["9.5", "Which of the following data are numerical data and which are not? (1) The heights of the students in your class (in cm). (2) The names of the rivers in Việt Nam. (3) The number of girls in each group of class 6A."],
    ["9.6", "Find the unreasonable value (if any) in each list of data: (a) Names of some fruits: mango, banana, papaya, carrot, durian. (b) Some animals that live in water: carp, shark, octopus, eagle, crab."],
    ["9.7", "Which method of collecting data would you use to get each of the following lists of data? (a) The number of students in your class who wear glasses. (b) The freezing temperatures of some liquids. (c) The capital cities of the countries in Asia."],
    ["9.8", "A local newspaper wrote: “In March this year, town X had 46 traffic accidents, in which 31 people were injured and 52 vehicles were damaged. Compared with March last year, there were 14 fewer accidents, 6 fewer injured people and 9 fewer damaged vehicles.” List the number of accidents, injured people and damaged vehicles in town X in March last year."],
    ["9.9", "A teacher recorded the time (in minutes) that a group of 10 students took to solve a problem: 8, 6, 12, 9, 7, 10, 8, 11, 9, 14. Write down the list of data obtained."],
    ["9.10", "An education researcher asks 8 students: “What is your favourite activity in your free time?” Results: Reading, Sports, Watching TV, Sports, Reading, Drawing, Watching TV, Sports. Write down the list of data obtained."],
  ]);

  addWorksheet("lesson-39", "Lesson 39: Statistical Tables and Pictographs", [
    ["9.11", "The times (in minutes) that 14 students took to solve a problem are: 6, 9, 5, 7, 7, 8, 7, 9, 7, 10, 6, 8, 5, 7. Make a statistical table showing the times of the 14 students. Time (minutes): 5, 6, 7, 8, 9, 10. Number of students: fill in the table."],
    ["9.12", "Nam, Bình and An each take 15 turns throwing a ball into a basket. Successful throws: Nam 9; Bình 6; An 11. (a) Make a statistical table showing the number of successful throws of the three friends. (b) Who scored the most? Who scored the fewest?"],
    ["9.13", "The statistical table shows the number of students at four schools: A: 1,245; B: 986; C: 1,532; D: 724. (a) What is the unit of the data in the table? (b) Which school has the most students? Which has the fewest?"],
    ["9.14", "The pictograph in the original PDF shows the number of Grade 6 textbooks sold at a bookshop last Sunday. (a) Which book sold the most? Which sold the fewest? (b) How many Grade 6 textbooks did the bookshop sell last Sunday in total? Open Print / Save as PDF above to see the pictograph."],
    ["9.15", "A survey of how all the staff of a company travel to work shows: 28 people go by bus, 9 by bicycle, 34 by motorbike and 6 by car; nobody uses any other way. (a) Make a statistical table showing the number of staff using each way of travelling. (b) How many staff does the company have? (c) Which way of travelling is used the most?"],
    ["9.16", "A bakery counted the number of phone calls to order cakes on each day of the week and showed them in the pictograph in the original PDF. How many calls did the bakery get on these days in total? On which days did the bakery get more than 22 calls? Open Print / Save as PDF above to see the pictograph."],
    ["9.17", "The table shows average height and weight by grade. Grades: 6, 7, 8, 9. Boys' height (cm) / weight (kg): 142.5 / 36.8; 148.2 / 40.5; 154.6 / 45.1; 160.3 / 49.7. Girls' height (cm) / weight (kg): 143.1 / 36.2; 148.9 / 40.0; 152.4 / 43.6; 155.8 / 46.9. (a) What units are used for height and weight? (b) What are the average height and weight of Grade 6 boys and Grade 6 girls?"],
    ["9.18", "Grade 6 students who borrowed books from the school library: Monday 18; Tuesday 30; Wednesday 12; Thursday 24; Friday 36. (a) Draw a pictograph for the table. (b) On which day did the most students come to the library? On which day did the fewest come?", true],
  ]);

  addWorksheet("lesson-40", "Lesson 40: Bar Charts", [
    ["9.19", "The bar chart in the original PDF shows the average temperature in a year of four towns. (a) Which town has the highest average temperature? Which has the lowest? (b) Make a statistical table of the average temperatures. Open Print / Save as PDF above to see the chart."],
    ["9.20", "Class 6A wants to play a folk game on a picnic. The class monitor asked each student to write down one game. Results: Tug of war 11; Sack race 8; Blind man's buff 6; Capture the flag 7; Boat race 4. (a) How many students are there in class 6A? (b) Draw a bar chart for the table.", true],
    ["9.21", "The bar chart in the original PDF shows the total rainfall in city M in some years. (a) What information does the chart show, and for which years? (b) What is the unit of rainfall in the chart? (c) Make a statistical table showing the data. Open Print / Save as PDF above to see the chart."],
    ["9.22", "The bar chart in the original PDF shows the number of views of four music groups on a video website. (a) Replace “?” in the chart with the correct number, given that group C has 1,520,000,000 views. (b) Make a statistical table showing the data. Open Print / Save as PDF above to see the chart."],
    ["9.23", "The pictograph in the original PDF shows the number of pairs of sports shoes a shop sold in the last 4 years. (a) Make a statistical table of the number of pairs of sports shoes the shop sold in the 4 years. (b) Draw a bar chart for the table in part (a). Open Print / Save as PDF above to see the pictograph.", true],
    ["9.24", "The bar chart in the original PDF shows the favourite colours of 24 students. (a) Which colours are liked by more students than yellow? (b) Make a statistical table of the number of students who like each colour. Open Print / Save as PDF above to see the chart."],
    ["9.25", "The time An spends on activities in a day: Sleeping 9 hours; Playing sports 1.5 hours; Studying 7 hours; Watching TV 1.5 hours; Eating 2 hours. Draw a bar chart for the data.", true],
    ["9.26", "Nam asked his classmates: “Which place in your home do you like best?” Results: 7 friends like the kitchen, 18 like the living room, 14 like the bedroom and 5 like other places. Make a statistical table and draw a bar chart for it.", true],
    ["9.27", "The bar chart in the original PDF shows the number of tickets sold at different prices for a concert. (a) How many tickets were sold in total? (b) How much money was collected from selling the tickets? (c) If the theatre has 2,000 seats, what percentage of the seats were sold? Open Print / Save as PDF above to see the chart."],
  ]);

  addWorksheet("lesson-41", "Lesson 41: Double Bar Charts", [
    ["9.28", "A children's bookshop recorded comic books and storybooks sold on each day: Monday, Tuesday, Wednesday, Thursday, Friday. Comic books: 22, 16, 14, 25, 30. Storybooks: 12, 8, 9, 6, 18. (a) Draw a double bar chart showing the number of books sold on each day. (b) Which kind of book did the shop sell more of?", true],
    ["9.29", "The double bar chart in the original PDF shows the number of cars of models X and Y sold from 2016 to 2019. (a) In which year did model X sell the most? (b) In which years did model X sell more than model Y? (c) In which years did model Y sell more than model X? Open Print / Save as PDF above to see the chart."],
    ["9.30", "The double bar chart in the original PDF shows the urban and rural population of six districts. (a) What is the population of district A? How many people live in urban areas and how many in rural areas? (b) How many districts have more rural people than urban people? Which districts are they? (c) Make a statistical table of the total population of each district. Open Print / Save as PDF above to see the chart."],
    ["9.31", "The double bar chart in the original PDF shows the number of gold medals and the total number of medals of six classes at a school sports festival. (a) Name the three classes with the most gold medals. (b) Arrange the classes in decreasing order of total medals. (c) The final ranking is based on gold medals; if two classes have the same number of gold medals, the class with more silver medals is ranked higher. Class 6B won 8 silver medals and class 6D won 10 silver medals. In which place is class 6D in the final ranking? (d) If ranked by total medals, in which place would class 6D be? Open Print / Save as PDF above to see the chart."],
    ["9.32", "Average weight (kg) of boys and girls in four Grade 6 classes: Classes 6A, 6B, 6C, 6D. Boys: 38.5, 40.1, 39.6, 37.8. Girls: 36.2, 37.4, 38.0, 35.9. The double bar chart in the original PDF shows this table, but some values are replaced by A, B, C, D. (a) What do the horizontal and vertical axes show? (b) Find A, B, C and D. Open Print / Save as PDF above to see the chart."],
  ]);

  addWorksheet("lesson-42", "Lesson 42: Possible Outcomes and Events in Games and Experiments", [
    ["9.33", "Nam takes a pen out of a pencil case that has 2 pencils, 3 blue pens and 1 red pen. (a) List all the possible outcomes. (b) Does the event “Nam takes out a pencil” always happen?"],
    ["9.34", "Class 6A is choosing a class monitor. Candidates: Group 1: Hải and Nam; Group 2: Lan; Group 3: Bình. Only Lan is a girl. (a) Can you be sure which student will become the class monitor? (b) Which group can the class monitor be from? (c) A student says: “Our class monitor will certainly be a boy.” Do you think this is right? (d) List the possible outcomes for which the event “The class monitor is not Hải” happens."],
    ["9.35", "A box has 3 yellow marbles, 2 blue marbles and 1 red marble (all the same size). Without looking, An takes one marble. (a) Can An be sure what colour the marble will be? (b) Give two events about the marble that An takes."],
    ["9.36", "Roll a dice. What can the number of dots be for each of these events to happen? (a) The number of dots is an odd number. (b) The number of dots is neither 1 nor 4."],
    ["9.37", "At the end of the year, the parents' committee has 40 gifts for the 40 students in the class: 18 joke books, 12 life-skills books and 10 pencil cases. An chooses one gift. (a) List the gifts that An can get. (b) If An gets a life-skills book, does the event “An does not get a pencil case” happen? (c) List the possible outcomes for which the event “An's gift is not a joke book” happens."],
    ["9.38", "Hà has 4 boxes of jelly sweets with 4 different flavours: mango, peach, apple and lemon. She gives two boxes to her younger brother. Which flavours can the two boxes be?"],
    ["9.39", "Given 5 points A, B, C, D, E, where no three points are collinear. Take 2 of the 5 points to draw a segment. List all the segments that can be drawn. How many segments are there in total?"],
    ["9.40", "At a local festival, Minh plays a game of throwing darts at a board with numbers on it as shown in the original PDF. (a) Which numbers can Minh's dart hit? (b) In how many cells does the event “The dart hits a cell with the number 3” not happen? Open Print / Save as PDF above to see the board."],
  ]);

  addWorksheet("lesson-43", "Lesson 43: Experimental Probability", [
    ["9.41", "Two groups of students tossed a coin many times. Group A: 200 tosses, 96 heads. Group B: 300 tosses, 156 heads. (a) Find the experimental probability of “getting heads” in each group's experiment. (b) How many times did the two groups toss the coin altogether? How many of these were heads? Find the experimental probability of getting heads based on the results of both groups together."],
    ["9.42", "An archer shoots 250 arrows at a target and 185 arrows hit it. Find the experimental probability of the event “The archer hits the target”."],
    ["9.43", "In a game, each player rolls a dice in each round; the player wins the round if the dice shows 6 dots. Four players A, B, C, D each play 30 rounds. The numbers of rounds won by A, B, C, D are 5, 6, 4 and 7. Find the experimental probabilities of the events “A wins”, “B wins”, “C wins” and “D wins”."],
    ["9.44", "Nam plays a puzzle game 40 times and wins 14 times. Find the experimental probability of the event “Nam wins the puzzle game”."],
    ["9.45", "At a local festival, Linh plays a game of throwing darts at a board with the numbers 2, 3 and 4. She throws 30 times and records: 2; 4; 3; 3; 2; 2; 4; 3; 2; 2; 3; 4; 2; 2; 3; 2; 4; 4; 3; 2; 2; 3; 4; 2; 3; 2; 2; 4; 2; 3. Find the experimental probability of the event “The dart hits the cell with the number 3”."],
  ]);

  addWorksheet("chapter-6-review", "Chapter VI: Review and Exercises", [
    ["1", "Which statement below is false? (A) To multiply two fractions, multiply the numerators together and multiply the denominators together. (B) To add two fractions with the same denominator, add the numerators and keep the denominator. (C) To divide a fraction by a non-zero fraction, multiply the first fraction by the reciprocal of the second. (D) To add two fractions, add the numerators together and add the denominators together."],
    ["2", "Which statement below is false? (A) 5 3/7 = 38/7. (B) 2 9/7 is a positive mixed number. (C) The fraction 4/9 is equal to −4/−9. (D) The fraction 15/6 shows the quotient of 15 divided by 6."],
    ["3", "Which statement below is false? (A) 1.5/4 is a fraction. (B) Every integer can be written as a fraction. (C) Every non-zero fraction has a reciprocal. (D) The fraction a/b equals c/d if a · d = b · c."],
    ["4", "Which statements below are correct? (A) A fraction in simplest form is a fraction whose numerator and denominator have only 1 and −1 as common divisors. (B) A fraction in simplest form is a fraction whose numerator and denominator have only 1 as a common divisor. (C) Every fraction can be simplified to a fraction in simplest form. (D) A fraction in simplest form is a fraction whose numerator and denominator have only −1 as a common divisor."],
    ["5", "Which statements below are correct? (A) a/b = (a · m)/(b · m), where m is a non-zero integer. (B) 5/7 = −30/−42. (C) a/b = (a : m)/(b : m), where m is a common divisor of a and b. (D) Every fraction with a negative denominator can be written as an equal fraction with a positive denominator."],
    ["6.48", "Write the following times in hours, as fractions in simplest form: 45 minutes; 24 minutes; 170 minutes."],
    ["6.49", "Calculate in a smart way: A = 3/4 · 5/9 − 13/9 + 5/9 · 1/4."],
    ["6.50", "3/4 of a watermelon weighs 3 1/4 kg. How many kilograms does the whole watermelon weigh?"],
    ["6.51", "Calculate B = 3/4 · a − 5/6 · a + b : 2, where a = 8/5 and b = 7/3."],
    ["6.52", "Hà reads a book in three days. On the first day she reads 1/3 of the pages. On the second day she reads 1/4 of the remaining pages. On the third day she reads the last 84 pages. How many pages does the book have?"],
    ["6.53", "Calculate A = (3²/(2 · 4)) · (4²/(3 · 5)) · (5²/(4 · 6)) · (6²/(5 · 7))."],
    ["6.54", "For the Mid-Autumn Festival, Hải asked his mother for permission to buy a toy for 60,000 dong. This amount is 3/7 of the money Hải has saved. How much money has Hải saved?"],
    ["6.55", "Three taps fill an empty tank. Taps I and II together fill it in 36 minutes; taps II and III together in 60 minutes; taps III and I together in 45 minutes. (a) If all three taps are turned on together, how long does it take to fill the tank? (b) How long does each tap take to fill the tank on its own?"],
  ]);

  addWorksheet("chapter-7-review", "Chapter VII: Review and Exercises", [
    ["1", "The hundredths digit of the decimal −2,517.384 is: (A) 3; (B) 8; (C) 4; (D) 7."],
    ["2", "Which statement below is false? (A) The sum of two positive decimals is a positive decimal. (B) The product of two positive decimals is a positive decimal. (C) The difference of two positive decimals is a positive decimal. (D) The quotient of two positive decimals is a positive decimal."],
    ["3", "Which statement below is correct? (A) The difference of two negative decimals is a negative decimal. (B) The sum of two negative decimals is a negative decimal. (C) The product of two negative decimals is a negative decimal. (D) The quotient of two negative decimals is a negative decimal."],
    ["4", "Rounding a = 247.3851 to the second decimal place gives: (A) 247.38; (B) 247.39; (C) 247.4; (D) 247."],
    ["5", "The product 312.5 · 1.08 is: (A) 337.5; (B) 33.75; (C) 3,375; (D) −337.5."],
    ["6", "A worker got two pay rises in a row; each time the salary increased by 20% compared with the previous salary. Compared with the salary before the rises, the salary has increased by: (A) 40%; (B) 44%; (C) 42%; (D) 24%."],
    ["7.35", "The long-jump results of ten students are: Minh 3.85 m; Lan 3.62 m; Hùng 4.07 m; Tuấn 3.91 m; Phong 3.78 m; Đức 4.12 m; Bảo 3.96 m; Khoa 3.70 m; Việt 4.03 m; Sơn 3.88 m. (a) Arrange the ten results from the highest to the lowest. (b) Which students won the gold, silver and bronze medals?"],
    ["7.36", "(a) Compare a = 0.47 and b = 0.5. (b) Find a decimal x such that a < x < b. (c) Are there 9 decimals x such that a < x < b?"],
    ["7.37", "Calculate mentally, following the example 6.97 + 3.45 = (6.97 + 0.03) + (3.45 − 0.03) = 7 + 3.42 = 10.42: (a) 42.98 + 17.36; (b) 25.47 − 2.98; (c) 18.63 − 13.99; (d) −16.96 − 22.58."],
    ["7.38", "Calculate: (a) 0.75 · 264 + (−26.4) : 4; (b) 4.75 · 3.2 + (−1.6) · 9.5 + 2.375 · 6.4."],
    ["7.39", "A company's export values this year (million USD) and percentage change from last year: Asia 48.25 (+3.5%); Europe 21.6 (−1.2%); America 32.14 (+7.6%); Africa 1.85 (+5.0%); Oceania 2.36 (−2.4%). (a) Find the total export value this year. (b) What was the export value to America last year? Use a calculator and round to the hundredths."],
    ["7.40", "A company's brand value was 48.5 billion USD in 2015 and 103.26 billion USD in 2021. (a) The brand value in 2021 is what percentage of the brand value in 2015? Use a calculator and round to the first decimal place. (b) The brand value in 2021 increased by 8% compared with 2020. What was its value in 2020? Round to the hundredths."],
    ["7.41", "A province exported about 1.25 million tonnes of rice in 2017, 1.36 million tonnes in 2018 and 1.48 million tonnes in 2019. By what percentage did rice exports in 2019 increase compared with 2018, and compared with 2017? Round to the tenths."],
    ["7.42", "Replace each letter with a suitable digit to get a correct subtraction (different letters stand for different digits): d1.5c − 6a.ba = c8.3d."],
  ]);

  addWorksheet("chapter-8-review", "Chapter VIII: Review and Exercises", [
    ["1", "Choose the correct statement: (A) Two rays with the same origin are opposite rays. (B) Two opposite rays have no common point. (C) Two rays on the same line with the same origin are opposite rays. (D) If rays Ox and Oy form line xy, they are opposite rays."],
    ["2", "Which statement below is false? (A) Two parallel lines do not meet. (B) Two lines that do not meet are parallel. (C) Two different lines with a common point M meet at M. (D) Two different lines that do not meet are parallel."],
    ["3", "If P and Q are two different points, then: (A) PQ and QP are two different lines. (B) PQ and QP are the same segment. (C) PQ and QP are two names of the same ray. (D) PQ and QP are two opposite rays."],
    ["4", "If N is a point of segment PQ, then: (A) N is the same as point P. (B) N lies between points P and Q. (C) N is the same as point Q. (D) N can be the same as point P, or the same as point Q, or lie between P and Q."],
    ["5", "When can we say that O is the midpoint of segment EF? (A) When OE = OF. (B) When EO + OF = EF. (C) When EO + OF = EF and OE = OF. (D) When O lies between E and F."],
    ["6", "If two angles are equal, then: (A) they must have the same vertex; (B) they must have the same sides; (C) they must have the same measure; (D) all three statements above are false."],
    ["8.54", "Look at Figure 8.32 in the original PDF and name the remaining points and line, given that lines a and b meet at K; lines b and c meet at M; lines a and c meet at N. Open Print / Save as PDF above to see the figure."],
    ["8.55", "Figure 8.33 in the original PDF shows a plan for planting 10 trees in 5 rows, with 4 trees in each row. Draw a plan for planting 9 trees in 8 rows, with 3 trees in each row. Open Print / Save as PDF above to see the figure.", true],
    ["8.56", "Given segment AB = 12 cm. Choose a segment 5 cm long as the unit of length. Find the length of AB in the new unit."],
    ["8.57", "Point A lies on ray Ox and is 6 cm from O. Let B be a point on ray OA. Find OB, given the distance AB in each case: (a) AB = 8 cm; (b) AB = 2 cm."],
    ["8.58", "Given ray Om. Draw angle mOn measuring 65°. How many such rays On can you draw?", true],
    ["8.59", "Draw two lines xx′ and yy′ meeting at point O so that angle xOy measures 70°. On ray Oy, take a point N different from O, then draw line aa′ through N parallel to xx′. (a) Name all 8 angles with vertex O or N (not counting straight angles). (b) Use a protractor to measure the 8 angles in part (a), then sort them into two groups so that each group has equal angles.", true],
  ]);

  addWorksheet("chapter-9-review", "Chapter IX: Review and Exercises", [
    ["1", "Mai says: “Data that are numbers are called numerical data.” Is Mai right or wrong? (A) Right; (B) Wrong."],
    ["2", "Linh measured the body temperature (in °C) of 5 classmates and got: 36.8; 37.0; 36.6; 36.9; 37.1. Which method did Linh use to collect the data? (A) Observation; (B) Doing an experiment (measuring); (C) Using a questionnaire; (D) Interviewing."],
    ["3", "“In a pictograph, we must say clearly how many objects each icon stands for.” Is this statement right or wrong? (A) Right; (B) Wrong."],
    ["4", "In a bar chart or a double bar chart, which statement is not correct? (A) A taller bar shows a larger value. (B) A bar below the horizontal axis shows a negative value. (C) Bars of the same height show equal values. (D) The bars have different widths."],
    ["5", "In an experiment: (A) a possible outcome is always an event; (B) an event is always a possible outcome."],
    ["6", "The experimental probability of an event: (A) depends on the number of times we do the experiment; (B) does not depend on the number of times we do the experiment."],
    ["9.46", "The chart in the original PDF shows the monthly rainfall in town K last year. (a) Find the total rainfall last year in town K. (b) Guess which 6 months are the rainy season. Find the total rainfall in those months. (c) Guess which 6 months are the dry season. Find the total rainfall in the dry-season months. Open Print / Save as PDF above to see the chart."],
    ["9.47", "Hoàng saw these plants in his grandmother's garden: mango tree, jackfruit tree, areca palm, guava tree, passion fruit vine, chayote, bottle gourd, sweet potato, watermelon, pennywort. (a) Which plants have an upright stem, which have a climbing stem and which have a creeping stem? (b) Complete a statistical table showing the number of plants with each type of stem. (c) Draw a bar chart for the table.", true],
    ["9.48", "In the school football team, player A has taken 40 penalty kicks, scoring 31 times and missing 9 times. Player B has taken 50 kicks, scoring 42 times and missing 8 times. (a) Draw a double bar chart showing the numbers of successful and missed penalty kicks of the two players. (b) The team's success rate is 78%. Compare the success rates of players A and B with the team rate.", true],
    ["9.49", "The double bar chart in the original PDF shows the number of students who registered for a swimming course and the number who completed it at five schools. (a) How many students registered and how many completed the course at school C? (b) At which school did the most students register? How many? (c) Compare the completion rates (completed ÷ registered) of the schools. Open Print / Save as PDF above to see the chart."],
    ["9.50", "Minh asked Grade 6 students where they usually do homework at home. Results: Living room 11; Study room 19; Bedroom 16; Other places 4. (a) Choose a suitable chart and draw it to show these data. (b) Based on Minh's survey, where do Grade 6 students most often do homework at home? Which bar of the chart shows this?", true],
    ["9.51", "Bình surveyed classmates' favourite fruits. Fruit: Apple, Orange, Pomelo, Grape, Other. Boys: 4, 5, 2, 6, 1. Girls: 7, 3, 2, 4, 2. (a) Help Bình write a survey form to collect the data. (b) Draw a chart for this table. Explain why you chose this chart. (c) Which fruit is the favourite of the whole class? Of the boys? Of the girls?", true],
    ["9.52", "You are interested in the questions below. Say how you could find the answer to each question. (a) Which are the five longest rivers in the world? (b) What is the favourite sport of your classmates? (c) How many students in your class ride a bicycle to school?"],
    ["9.53", "A black bag has 3 blue balls, 2 yellow balls and 2 red balls (all the same size). Nam takes a ball without looking. (a) What colour can the ball Nam takes be? (b) Take a ball from the bag 20 times; each time, record its colour and put it back before the next draw. Complete a table of the number of times each colour appears. (c) Draw a bar chart for the table.", true],
  ]);
})();
