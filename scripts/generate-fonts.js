import {generateFonts} from 'fantasticon';

const fs = await import('fs/promises');
const path = await import('path');

const srcDir = './src';
const distDir = './dist';

let fontDirs = [];

function upperFirst(str)
{
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function generateIconFonts()
{
  const __dirname = path.dirname(new URL(import.meta.url).pathname);

  const directories = await fs.readdir(srcDir, {withFileTypes: true});
  for(const dir of directories)
  {
    if(dir.isDirectory())
    {
      const inputDir = path.join(srcDir, dir.name);
      const outputDir = path.join(distDir, dir.name);

      // Ensure the output directory exists
      await fs.mkdir(outputDir, {recursive: true});

      // Add the directory to the fontDirs array
      fontDirs.push(inputDir);

      await generateFonts({
        inputDir,
        outputDir,
        fontTypes:     ['ttf', 'woff2', 'woff'],
        templates:     {
          'html': path.join(__dirname, 'templates', 'icon-font.html.hbs')
        },
        normalize:     true,
        formatOptions: {
          svg: {
            perserveAspectRatio: true
          }
        }
      });
    }
  }
}

async function createCssFile()
{
  // Copy template css file to output dir
  let output = fontDirs.map(dir => `@font-face {
  font-family: 'Kubex Icons ${upperFirst(dir.split('/').pop())}';
  src: url('./${dir.split('/').pop()}/icons.woff2') format('woff2'),
        url('./${dir.split('/').pop()}/icons.woff') format('woff'),
        url('./${dir.split('/').pop()}/icons.ttf') format('truetype');
      
  font-weight: normal;
  font-style: normal;
}`).join('\n\n');

  let outputCss = fontDirs.map(dir => `.kubex-icon-${dir.split('/').pop()} {
  font-family: 'Kubex Icons ${upperFirst(dir.split('/').pop())}';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}`).join('\n\n');

  output += '\n\n' + outputCss;

  fs.writeFile(path.resolve(distDir, 'kubex-icons.css'), output);
}

generateIconFonts()
  .then(() => {
    console.log('Icon fonts generated successfully.');
    return createCssFile();
  })
  .catch(err => console.error('Error generating icon fonts:', err));
