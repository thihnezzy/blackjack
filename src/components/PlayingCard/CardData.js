import Diamond4 from '../../assets/Rank=4, Suit=Diamond.png'
import Spades6 from '../../assets/Rank=6, Suit=Spades.png'
import Clubs3 from '../../assets/Rank=3, Suit=Clubs.png'
import ClubsA from '../../assets/Rank=A, Suit=Clubs.png'
import Heart10 from '../../assets/Rank=10, Suit=Heart.png'
import SpadesK from '../../assets/Rank=K, Suit=Spades.png'
import Spades9 from '../../assets/Rank=9, Suit=Spades.png'
import Diamond5 from '../../assets/Rank=5, Suit=Diamond.png'
import HeartJ from '../../assets/Rank=J, Suit=Heart.png'
import Heart8 from '../../assets/Rank=8, Suit=Heart.png'
import Clubs4 from '../../assets/Rank=4, Suit=Clubs.png'
import Spades2 from '../../assets/Rank=2, Suit=Spades.png'
import Heart7 from '../../assets/Rank=7, Suit=Heart.png'
import Heart9 from '../../assets/Rank=9, Suit=Heart.png'
import SpadesA from '../../assets/Rank=A, Suit=Spades.png'
import Clubs5 from '../../assets/Rank=5, Suit=Clubs.png'
import Spades7 from '../../assets/Rank=7, Suit=Spades.png'
import HeartK from '../../assets/Rank=K, Suit=Heart.png'
import Diamond6 from '../../assets/Rank=6, Suit=Diamond.png'
import HeartQ from '../../assets/Rank=Q, Suit=Heart.png'
import SpadesJ from '../../assets/Rank=J, Suit=Spades.png'
import DiamondK from '../../assets/Rank=K, Suit=Diamond.png'
import Diamond3 from '../../assets/Rank=3, Suit=Diamond.png'
import Heart6 from '../../assets/Rank=6, Suit=Heart.png'
import Diamond7 from '../../assets/Rank=7, Suit=Diamond.png'
import DiamondQ from '../../assets/Rank=Q, Suit=Diamond.png'
import Spades8 from '../../assets/Rank=8, Suit=Spades.png'
import DiamondJ from '../../assets/Rank=J, Suit=Diamond.png'
import Diamond2 from '../../assets/Rank=2, Suit=Diamond.png'
import Spades3 from '../../assets/Rank=3, Suit=Spades.png'
import Clubs2 from '../../assets/Rank=2, Suit=Clubs.png'
import SpadesQ from '../../assets/Rank=Q, Suit=Spades.png'
import Clubs7 from '../../assets/Rank=7, Suit=Clubs.png'
import Spades4 from '../../assets/Rank=4, Suit=Spades.png'
import Clubs8 from '../../assets/Rank=8, Suit=Clubs.png'
import Heart4 from '../../assets/Rank=4, Suit=Heart.png'
import ClubsJ from '../../assets/Rank=J, Suit=Clubs.png'
import HeartA from '../../assets/Rank=A, Suit=Heart.png'
import Heart3 from '../../assets/Rank=3, Suit=Heart.png'
import Clubs10 from '../../assets/Rank=10, Suit=Clubs.png'
import DiamondA from '../../assets/Rank=A, Suit=Diamond.png'
import Diamond9 from '../../assets/Rank=9, Suit=Diamond.png'
import Diamond10 from '../../assets/Rank=10, Suit=Diamond.png'
import Heart2 from '../../assets/Rank=2, Suit=Heart.png'
import Spades5 from '../../assets/Rank=5, Suit=Spades.png'
import ClubsQ from '../../assets/Rank=Q, Suit=Clubs.png'
import Diamond8 from '../../assets/Rank=8, Suit=Diamond.png'
import Clubs6 from '../../assets/Rank=6, Suit=Clubs.png'
import ClubsK from '../../assets/Rank=K, Suit=Clubs.png'
import Clubs9 from '../../assets/Rank=9, Suit=Clubs.png'
import Heart5 from '../../assets/Rank=5, Suit=Heart.png'
import Spades10 from '../../assets/Rank=10, Suit=Spades.png'
import Back from '../../assets/Card Back.png'
const Cards = [
    {rank: 4,suit: 'Diamond', image: Diamond4 },
{rank: 6,suit: 'Spades', image: Spades6 },
{rank: 3,suit: 'Clubs', image: Clubs3 },
{rank: "A",suit: 'Clubs', image: ClubsA },
{rank: 10,suit: 'Heart', image: Heart10 },
{rank: "K",suit: 'Spades', image: SpadesK },
{rank: 9,suit: 'Spades', image: Spades9 },
{rank: 5,suit: 'Diamond', image: Diamond5 },
{rank: "J",suit: 'Heart', image: HeartJ },
{rank: 8,suit: 'Heart', image: Heart8 },
{rank: 4,suit: 'Clubs', image: Clubs4 },
{rank: 2,suit: 'Spades', image: Spades2 },
{rank: 7,suit: 'Heart', image: Heart7 },
{rank: 9,suit: 'Heart', image: Heart9 },
{rank: "A",suit: 'Spades', image: SpadesA },
{rank: 5,suit: 'Clubs', image: Clubs5 },
{rank: 7,suit: 'Spades', image: Spades7 },
{rank: "K",suit: 'Heart', image: HeartK },
{rank: 6,suit: 'Diamond', image: Diamond6 },
{rank: "Q",suit: 'Heart', image: HeartQ },
{rank: "J",suit: 'Spades', image: SpadesJ },
{rank: "K",suit: 'Diamond', image: DiamondK },
{rank: 3,suit: 'Diamond', image: Diamond3 },
{rank: 6,suit: 'Heart', image: Heart6 },
{rank: 7,suit: 'Diamond', image: Diamond7 },
{rank: "Q",suit: 'Diamond', image: DiamondQ },
{rank: 8,suit: 'Spades', image: Spades8 },
{rank: "J",suit: 'Diamond', image: DiamondJ },
{rank: 2,suit: 'Diamond', image: Diamond2 },
{rank: 3,suit: 'Spades', image: Spades3 },
{rank: 2,suit: 'Clubs', image: Clubs2 },
{rank: "Q",suit: 'Spades', image: SpadesQ },
{rank: 7,suit: 'Clubs', image: Clubs7 },
{rank: 4,suit: 'Spades', image: Spades4 },
{rank: 8,suit: 'Clubs', image: Clubs8 },
{rank: 4,suit: 'Heart', image: Heart4 },
{rank: "J",suit: 'Clubs', image: ClubsJ },
{rank: "A",suit: 'Heart', image: HeartA },
{rank: 3,suit: 'Heart', image: Heart3 },
{rank: 10,suit: 'Clubs', image: Clubs10 },
{rank: "A",suit: 'Diamond', image: DiamondA },
{rank: 9,suit: 'Diamond', image: Diamond9 },
{rank: 10,suit: 'Diamond', image: Diamond10 },
{rank: 2,suit: 'Heart', image: Heart2 },
{rank: 5,suit: 'Spades', image: Spades5 },
{rank: "Q",suit: 'Clubs', image: ClubsQ },
{rank: 8,suit: 'Diamond', image: Diamond8 },
{rank: 6,suit: 'Clubs', image: Clubs6 },
{rank: "K",suit: 'Clubs', image: ClubsK },
{rank: 9,suit: 'Clubs', image: Clubs9 },
{rank: 5,suit: 'Heart', image: Heart5 },
{rank: 10,suit: 'Spades', image: Spades10 },

]
export default Cards;