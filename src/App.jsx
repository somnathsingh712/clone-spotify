// // import React  from 'react';
// // import Sidebar from './components/Sidebar.jsx';
// // import Player from './components/Player.jsx';
// // import Display from './components/Display.jsx';
// // import {PlayerContext} from './context/PlayerContext';

// // const App = () => {

// //   const {audioRef }=useContext(PlayerContext);

// //   return (
// //     <div className='h-screen bg-black'> 
// //     <div className='h-[90%] flex'>
// //       <Sidebar />
// //       <Display />
// //       </div>   
// //       <Player />
// //       <audio ref={audioRef} preload='auto'>  </audio>
// //     </div>
// //   )
// // }
// // export default App;


// import { useContext } from 'react';
// import Sidebar from './components/Sidebar.jsx';
// import Player from './components/Player.jsx';
// import Display from './components/Display.jsx';
// import { PlayerContext } from './context/PlayerContext';

// const App = () => {
//   const { audioRef } = useContext(PlayerContext);

//   return (
//     <div className='h-screen bg-black'>
//       <div className='h-[90%] flex'>
//         <Sidebar />
//         <Display />
//       </div>

//       <Player />
//       <audio ref={audioRef} src={track?.file} preload='auto' />
//     </div>
//   );
// };

// export default App;


import { useContext } from 'react';
import { PlayerContext } from './context/PlayerContext';
import Sidebar from './components/Sidebar';
import Display from './components/Display';
import Player from './components/Player';

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>

      <Player />

      <audio
        ref={audioRef}
        src={track?.file}
        preload="auto"
      />
    </div>
  );
};

export default App;
