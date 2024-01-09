import { program } from 'commander';

const genDiff = () => {
    program
        .description('Compares two configuration files and shows a difference.')
        .version('1.0.0')
        .arguments('<filepath1> <filepath2>')
        .option('-f, --format <type>', 'output format', 'stylish');

    program.parse();
};

export default genDiff;