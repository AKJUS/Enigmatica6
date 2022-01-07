onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:base/naturesaura/animalspawner/';
    const recipes = [
        {
            inputs: [
                'naturesaura:birth_spirit',
                'quark:bottled_cloud',
                'resourcefulbees:sand_honeycomb',
                'minecraft:sand'
            ],
            entity: 'alexsmobs:guster',
            aura: 150000,
            time: 120,
            id: `${id_prefix}guster`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:dusts/fluorite',
                'resourcefulbees:electrum_honeycomb',
                'powah:charged_snowball'
            ],
            entity: 'thermal:blitz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}blitz`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:dusts/lapis',
                'resourcefulbees:icy_honeycomb',
                'minecraft:blue_ice'
            ],
            entity: 'thermal:blizz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}blizz`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:dusts/apatite',
                'resourcefulbees:rocky_honeycomb',
                'minecraft:basalt'
            ],
            entity: 'thermal:basalz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}basalz`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#forge:dusts/sulfur',
                'resourcefulbees:coal_honeycomb',
                'minecraft:nether_bricks'
            ],
            entity: 'minecraft:blaze',
            aura: 150000,
            time: 120,
            id: 'naturesaura:animal_spawner/blaze'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:forest_honeycomb', 'minecraft:blue_ice'],
            entity: 'ars_nouveau:wilden_guardian',
            aura: 250000,
            time: 120,
            id: `${id_prefix}wilden_guardian`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:forest_honeycomb', 'valhelsia_structures:bone_pile'],
            entity: 'ars_nouveau:wilden_hunter',
            aura: 150000,
            time: 120,
            id: `${id_prefix}wilden_hunter`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:forest_honeycomb', 'astralsorcery:nocturnal_powder'],
            entity: 'ars_nouveau:wilden_stalker',
            aura: 150000,
            time: 120,
            id: `${id_prefix}wilden_stalker`
        },
        {
            inputs: [
                'farmersdelight:honey_glazed_ham_block',
                'naturesaura:token_anger',
                'eidolon:shadow_gem',
                '#forge:ingots/forgotten_metal'
            ],
            entity: 'undergarden:masticator',
            aura: 5000000,
            time: 200,
            id: `${id_prefix}masticator`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'resourcefulbees:sand_honeycomb',
                'architects_palette:rotten_flesh_block'
            ],
            entity: 'alexsmobs:komodo_dragon',
            aura: 50000,
            time: 60,
            id: `${id_prefix}komodo_dragon`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:sand_honeycomb', 'minecraft:chicken'],
            entity: 'alexsmobs:rattlesnake',
            aura: 50000,
            time: 60,
            id: `${id_prefix}rattlesnake`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'resourcefulbees:sand_honeycomb', 'minecraft:golden_carrot'],
            entity: 'atum:camel',
            aura: 50000,
            time: 60,
            id: `${id_prefix}camel`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
