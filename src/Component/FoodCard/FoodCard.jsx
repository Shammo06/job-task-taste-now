import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Card from "./Card";
import './card.css'
import data from '../../../public/pizza.json'
import burger from '../../../public/burger.json'


const FoodCard = () => {
    return (
        <div>
            <div className="foodcard">
                <h2>Our Popular <span>Categories</span></h2>
            <Tabs >
              <TabList className='tab-list'>
                <Tab className='tab'>Pizzas</Tab>
                <Tab className='tab'>Burgers</Tab>
                <Tab className='tab'>Salads</Tab>
                <Tab className='tab'>Combos</Tab>
              </TabList>
              <TabPanel>
                <Card data={data} />
              </TabPanel>
              <TabPanel>
                <Card  data={burger}/>
              </TabPanel>
              <TabPanel>
                <Card  data={data}/>
              </TabPanel>
              <TabPanel>
                <Card  data={burger}/>
              </TabPanel>
              
            </Tabs>
            </div>
        </div>
    );
};

export default FoodCard;