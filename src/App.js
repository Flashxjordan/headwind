import SideBar from '/Users/user/Desktop/headwind/src/Components/SideBar/Index';
import Channelbar from '/Users/user/Desktop/headwind/src/Components/ChannelBar/Index';
import ContentContainer from '/Users/user/Desktop/headwind/src/Components/ContentContainer/Index';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default App;