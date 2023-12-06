import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readDirectory(directoryPath) {
  const stats = fs.statSync(directoryPath);

  if (!stats.isDirectory()) {
    throw new Error(`${directoryPath} is not a directory.`);
  }

  const metadata = {
    name: path.basename(directoryPath),
    type: 'directory',
    children: [],
  };

  const entries = fs.readdirSync(directoryPath);

  entries.forEach((entry) => {
    const entryPath = path.join(directoryPath, entry);
    const entryStats = fs.statSync(entryPath);

    if (entryStats.isDirectory()) {
      const childMetadata = readDirectory(entryPath);
      metadata.children.push(childMetadata);
    } else {
      metadata.children.push({
        name: entry,
        type: 'article',
      });
    }
  });

  return metadata;
}

const currentDirectory = path.join(__dirname + '/../' + '/docs');
const metadata = readDirectory(currentDirectory);

fs.writeFileSync('./docs-metadata.json', JSON.stringify(metadata, null, 2));

//TODO: 빈폴더는 생성되지 않도록 변경하기, 게시물의 추가 정보(태그, 생성 날짜 등) https://www.npmjs.com/package/front-matter 사용
