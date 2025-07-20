#!/usr/bin/env node

import {Command} from '@commander-js/extra-typings';
import {checkbox} from '@inquirer/prompts';
import {version, name, description} from '../package.json'
import recipes from './recipes.ts';

new Command()
    .name(name)
    .description(description)
    .version(version)
    .argument('[packages...]', 'packages')
    .action(async (packages: string[]) => {

        const choices = recipes.map(({value}) => ({
            value: value.toLowerCase(),
            name: value.toUpperCase(),
            checked: packages.includes(value),
        }))

        const selected: string[] = await checkbox(
            {
                message: 'Select:',
                choices
            }
        );

        console.log({selected});

    })
    .parse();
