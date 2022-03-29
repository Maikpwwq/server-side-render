import fs from 'fs';

const getManifest = () => {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(__dirname, '/public/manifest.json')),
      // (`${__dirname}/public`);
    );
  } catch (err) {
    console.error(err);
  }
};

export default getManifest;
