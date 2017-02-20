import {CharacterPage} from './characterSheet/CharacterPage'
import {CharacterOverview} from './characterSheet/CharacterOverview'
import {CharacterStats} from './characterSheet/CharacterStats'
import {CharacterSkills} from './characterSheet/CharacterSkills'
// import {Stats} from './characterSheet/Stats'

export default {
    characterSheet : {
        pages: [
            "character" : {
                Page: CharacterOverview
            },
            "stats" : {
                Page: CharacterStats
            },
            "skills" : {
                Page: CharacterSkills
            },
            "items" : {
                Page: CharacterOverview
            }
        ]
    }
};
