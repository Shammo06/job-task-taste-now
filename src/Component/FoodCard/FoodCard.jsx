import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Card from "./Card";


const FoodCard = () => {
    return (
        <div>
            <div className="">
                <h2>Our Popular <span>Categories</span></h2>
            <Tabs defaultIndex={0}>
              <TabList className='tab'>
                <Tab>Pizzas</Tab>
                <Tab>Burgers</Tab>
                <Tab>Salads</Tab>
                <Tab>Combos</Tab>
              </TabList>
              <TabPanel>
                <Card />
              </TabPanel>
              <TabPanel>
                <Card />
              </TabPanel>
              <TabPanel>
                <Card />
              </TabPanel>
              <TabPanel>
                <Card />
              </TabPanel>
              
            </Tabs>
            </div>
        </div>
    );
};

export default FoodCard;