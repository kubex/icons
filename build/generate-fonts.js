import {generateFonts} from 'fantasticon';

const srcDir = './src';
const distDir = './dist';

async function generateIconFonts()
{
  const fs = await import('fs/promises');
  const path = await import('path');
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

      await generateFonts({
        inputDir,
        outputDir,
        fontTypes: ['ttf', 'woff2', 'woff'],
        templates: {
          'html': path.join(__dirname, 'templates', 'icon-font.html.hbs')
        }
      });
    }
  }
}

generateIconFonts()
  .then(() => console.log('Icon fonts generated successfully.'))
  .catch(err => console.error('Error generating icon fonts:', err));
