//import axios, { AxiosProgressEvent } from "axios";
import MockAdapter from "axios-mock-adapter";
import { CreateSongResponse } from '../Music/Songs/SongDataSource'
import { BASE_URL } from "./constant";
//export const mock = new MockAdapter(axios)




const sleep = (value: number) =>
  new Promise((resolve) => setTimeout(resolve, value));

// this mocks a request which slowly resolves (20% progress every 500ms)
/*mock.onPost(`${BASE_URL}AdminSong/create`).reply(async (config) => {
  const total = 1024; // mocked file size
  for (const progress of [0, 0.2, 0.4, 0.6, 0.8, 1]) {
    await sleep(500);
    if (config.onUploadProgress) {
      config.onUploadProgress({ loaded: total * progress, total } as AxiosProgressEvent);
    }
  }
  return [200, {
      name : "Nice Track",
      path: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      artworkPath: "https://picsum.photos/200",
      id : "1234"
   } as CreateSongResponse];
});*/

