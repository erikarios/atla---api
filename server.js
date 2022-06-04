const express = require ('express')
const app = express()
const cors = require('cors')
const PORT = 7000

app.use(cors())

const character ={
    'aang': {
        'nation' : 'Air Nation',
        'bending' : 'Airbending, Waterbending, Firebending, Earthbending',
        'skills' : 'Combat Proficiency, Ability to Take Bending Away',     
        'weapon' : 'Glider',
        'nickname' : 'Twinkle Toes',
        'notableFact(s)' : 'Aang is first discovered frozen in an iceberg. Having been in the iceberg for a hundred years, he is technically 112. He is the last surviving air bender.',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png'
    },
    'katara': {
        'nation' : 'Water Nation',
        'bending' : 'Waterbending, Bloodbending',
        'skills' : 'Combat Proficiency, Ability to Heal',     
        'weapon' : 'None',
        'nickname' : 'None',
        'notableFact(s)' : 'Katara is the only surviving Southern Water bender. She also has the rare ability to heal and bloodbend',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/2/28/Katara_smiling.png'
    },
    'sokka': {
        'nation' : 'Water Nation',
        'bending' : 'None',
        'skills' : 'Strategist, Combat Proficiency, Swordsmanship, Leadership',     
        'weapon' : 'Boomerang, Space Sword',
        'nickname' : 'Captain Boomerang',
        'notableFact(s)' : 'Sokka came up with the plan to invade the Fire Nation on the Day of the Black Sun and lead the operation. Sokka also helped free his father and others from the Boiling Rock, the most secure Fire nation prison',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/d/dd/Sokka%27s_sword.png'
    },
    'toph': {
        'nation' : 'Earth Nation',
        'bending' : 'Earthbending, Metalbending',
        'skills' : 'Combat Proficiency, Ability to Tell Who is Lying',     
        'weapon' : 'None',
        'nickname' : 'The Blind Bandit',
        'notableFact(s)' : 'Toph was the first earthbender who discovered metalbending and mastered it',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png'
    },
    'zuko': {
        'nation' : 'Fire Nation',
        'bending' : 'Firebending',
        'skills' : 'Redirect Lightning, Combat Proficiency, Swordsmanship',     
        'weapon' : 'Sword',
        'nickname' : 'Zuzu',
        'notableFact(s)' : 'Initally wanting to capture the avatar to restore honor to his name; Zuko was able to redeemed himself and taught the avatar firebending',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/4/4b/Zuko.png'
    },
    'azula': {
        'nation' : 'Fire Nation',
        'bending' : 'Firebending, Lightning',
        'skills' : 'Redirect Lightning, Acrobatics, Combat Proficiency, Agility, Strategist',
        'weapon' : 'None',
        'nickname' : 'None',
        'notableFact(s)' : 'Azula is the only firebender who always generates blue fire. She uses fear and manipulation to control those around her.',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/1/12/Azula.png'
    },
    'appa': {
        'nation' : 'Air Nation',
        'bending' : 'None',
        'skills' : 'Ability to Fly, Intelligent, Ability to Understand Human Language',
        'weapon' : 'None',
        'nickname' : 'None',
        'notableFact(s)' : 'Appa is Aang\'s loyal sky bison who has the ability to fly. Aang and Momo have a very strong bond',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/6/65/Appa_flying.png'
    },
    'momo': {
        'nation' : 'Air Nation',
        'bending' : 'None',
        'skills' : 'Enhanced Sight and Smell, Ability to Glide, Intelligent',
        'weapon' : 'None',
        'nickname' : 'None',
        'notableFact(s)' : 'Momo is Aang\'s loyal pet winged lemur and mascot of Team Avatar',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/8/80/Momo_staring.png'
    },
    'ozai': {
        'nation' : 'Fire Nation',
        'bending' : 'Firebending, Lightning',
        'skills' : 'Strong Physical Ability, Manipulation',
        'weapon' : 'None',
        'nickname' : 'Fire Lord, Phoenix King',
        'notableFact(s)' : 'Ozai killed his own father to become fire lord and continue the expansion of the Fire Nation through war and power. During his final batter with Aang, Ozai was stipped of his firebending.',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/4/4a/Ozai.png'
    },
    'iroh': {
        'nation' : 'Fire Nation',
        'bending' : 'Firebending, Lightning',
        'skills' : 'Stategist, Redirect Lightning, Skilled at Pai Sho, Excellent Tea Maker',
        'weapon' : 'None',
        'nickname' : 'The Dragon of the West',
        'notableFact(s)' : 'Iroh opened a tea shop called the Jasmine Dragon and sold the best tea. He is also a part of the Order of the White Lotus, an ancient society that transcends the boundaries of the four nations, seeking philosophy, beauty, and truth.',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png'
    },
    'mai': {
        'nation' : 'Fire Nation',
        'bending' : 'None',
        'skills' : 'Master Marksman, Agility',
        'weapon' : 'Knives',
        'nickname' : 'None',
        'notableFact(s)' : 'Mai is exceptionally proficient at throwing knives, which is a self-taught skill. Persuaded by fear, Ty Lee joined Azula\'s side to capture Aang',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/4/40/Mai.png'
    },
    'ty lee': {
        'nation' : 'Fire Nation',
        'bending' : 'None',
        'skills' : 'Chi Blocking, Acrobatics, Combat Proficiency, Agility',
        'weapon' : 'None',
        'nickname' : 'Circus Freak',
        'notableFact(s)' : 'Ty Lee would temporarily paralyze those she fought against through chi blocking. Persuaded by fear, Ty Lee joined Azula\'s side to capture Aang',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/6/6d/Ty_Lee.png'
    },
    'suki': {
        'nation' : 'Earth Nation',
        'bending' : 'None',
        'skills' : 'Combat Proficiency, Agility, Swordsmanship, Acrobatics, Leadership',
        'weapon' : 'War Fans, Katana',
        'nickname' : 'None',
        'notableFact(s)' : 'Suki is the leader of the Kyoshi warriors. She saved Appa and battled Azula alongside the Kyoshi warriors.',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/1/14/Suki.png'
    },
    'kyoshi': {
        'nation' : 'Earth Nation',
        'bending' : 'Airbending, Waterbending, Firebending, Earthbending',
        'skills' : 'Combat Proficiency, Leadership',
        'weapon' : 'War Fans',
        'nickname' : 'None',
        'notableFact(s)' : 'Kyoshi was the tallest and oldest living avatar. She also did what needed to be done in order for there to be peace',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/0/07/Avatar_Kyoshi.png'
    },
    'roku': {
        'nation' : 'Fire Nation',
        'bending' : 'Airbending, Waterbending, Firebending, Earthbending, Lavabend',
        'skills' : 'Combat Proficiency, Disciplined',
        'weapon' : 'None',
        'nickname' : 'None',
        'notableFact(s)' : 'Roku was the avatar before Aang and often gave him advice. Roku like Aang also had a spiritual companion in the form of his dragon named Fang.',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/f/f6/Roku.png'
    },
    'bumi': {
        'nation' : 'Earth Nation',
        'bending' : 'Earthbending',
        'skills' : 'Combat Proficiency, Agility',
        'weapon' : 'None',
        'nickname' : 'A Mad Genius',
        'notableFact(s)' : 'Bumi was a close friend of Aang prior to the start of the hundred year war. He is also a part of the Order of the White Lotus, an ancient society that transcends the boundaries of the four nations, seeking philosophy, beauty, and truth.',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/e/e8/King_Bumi.png'
    },
    'long feng': {
        'nation' : 'Earth Nation',
        'bending' : 'Earthbending',
        'skills' : 'Combat Proficiency, Political Mastermind',
        'weapon' : 'None',
        'nickname' : 'None',
        'notableFact(s)' : 'Long Feng is leader of the Dai Li, a secret police force who would silence anyone who spoke out about the hundred year war. He was also the advisor to the Earth King and often manipulated him.',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/8/8d/Long_Feng_scheming.png'
    },
    'piandao': {
        'nation' : 'Fire Nation',
        'bending' : 'None',
        'skills' : 'Combat Proficiency, Agility, Swordsmanship, Bladesmith, Calligrapher',
        'weapon' : 'Sword',
        'nickname' : 'None',
        'notableFact(s)' : 'Piandao was a master swordsman who incorporated techniques of benders and warriors into his swordsmanship. He taught Sokka the art of swordsmanship. He is also a part of the Order of the White Lotus, an ancient society that transcends the boundaries of the four nations, seeking philosophy, beauty, and truth.',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/e/e1/Piandao.png'
    },
    'jeong jeong': {
        'nation' : 'Fire Nation',
        'bending' : 'Firebending',
        'skills' : 'Combat Proficiency',
        'weapon' : 'Sword',
        'nickname' : 'The Deserter',
        'notableFact(s)' : 'Jeong Jeong is a firebending prodigy who became disillusioned with his nation and firebending. He was Aang\'s first firebending teacher. He is also a part of the Order of the White Lotus, an ancient society that transcends the boundaries of the four nations, seeking philosophy, beauty, and truth.',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/a/a7/Jeong_Jeong_serious.png'
    },
    'gyatso': {
        'nation' : 'Air Nation',
        'bending' : 'Airbending',
        'skills' : 'Agility, Leadership, Combat Proficiency',
        'weapon' : 'None',
        'nickname' : 'None',
        'notableFact(s)' : 'Gyatso was one of the five head monks at the Southern Air Temple. He was highly respected, kind wise, and a bit of a prankster. Gyatso was a mentor to Aang and taught him airbending. He was also friends with Avatar Roku.',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/a/a4/Monk_Gyatso.png'
    },
    'cabbage merchant': {
        'nation' : 'Earth Nation',
        'bending' : 'None',
        'skills' : 'Chef',
        'weapon' : 'None',
        'nickname' : 'None',
        'notableFact(s)' : 'His beloved cabbages would always end up destroyed and he would cry out "My cabbages!" He later built Cabbage Corp, which produced automobiles and airships for the Earth Kingdom',
        'image' : 'https://static.wikia.nocookie.net/avatar/images/2/2f/Cabbage_merchant.png'
    },

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterName', (request, response) => {
    const characterName = request.params.characterName.toLowerCase()
    if(character[characterName]){ 
        response.json(character[characterName])
            
   } else {
       response.json(character['aang'])
   }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})

