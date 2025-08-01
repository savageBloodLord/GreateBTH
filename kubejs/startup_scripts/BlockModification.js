let logs = [
	'ad_astra:glacian_log',
	'aether:golden_oak_log',
	'aether:golden_oak_wood',
	'aether:skyroot_log',
	'aether:skyroot_wood',
	'aether:stripped_skyroot_log',
	'aether:stripped_skyroot_wood',
	'deep_aether:conberry_log',
	'deep_aether:conberry_wood',
	'deep_aether:cruderoot_log',
	'deep_aether:cruderoot_wood',
	'deep_aether:roseroot_log',
	'deep_aether:roseroot_wood',
	'deep_aether:stripped_conberry_log',
	'deep_aether:stripped_conberry_wood',
	'deep_aether:stripped_cruderoot_log',
	'deep_aether:stripped_cruderoot_wood',
	'deep_aether:stripped_roseroot_log',
	'deep_aether:stripped_roseroot_wood',
	'deep_aether:stripped_sunroot_log',
	'deep_aether:stripped_sunroot_wood',
	'deep_aether:stripped_yagroot_log',
	'deep_aether:stripped_yagroot_wood',
	'deep_aether:sunroot_log',
	'deep_aether:sunroot_wood',
	'deep_aether:yagroot_log',
	'deep_aether:yagroot_wood',
	'gtceu:rubber_log',
	'gtceu:rubber_wood',
	'gtceu:stripped_rubber_log',
	'gtceu:stripped_rubber_wood',
	'minecraft:acacia_log',
	'minecraft:acacia_wood',
	'minecraft:birch_log',
	'minecraft:birch_wood',
	'minecraft:cherry_log',
	'minecraft:cherry_wood',
	'minecraft:crimson_hyphae',
	'minecraft:crimson_stem',
	'minecraft:dark_oak_log',
	'minecraft:dark_oak_wood',
	'minecraft:jungle_log',
	'minecraft:jungle_wood',
	'minecraft:mangrove_log',
	'minecraft:mangrove_wood',
	'minecraft:oak_log',
	'minecraft:oak_wood',
	'minecraft:spruce_log',
	'minecraft:spruce_wood',
	'minecraft:stripped_acacia_log',
	'minecraft:stripped_acacia_wood',
	'minecraft:stripped_birch_log',
	'minecraft:stripped_birch_wood',
	'minecraft:stripped_cherry_log',
	'minecraft:stripped_cherry_wood',
	'minecraft:stripped_crimson_hyphae',
	'minecraft:stripped_crimson_stem',
	'minecraft:stripped_dark_oak_log',
	'minecraft:stripped_dark_oak_wood',
	'minecraft:stripped_jungle_log',
	'minecraft:stripped_jungle_wood',
	'minecraft:stripped_mangrove_log',
	'minecraft:stripped_mangrove_wood',
	'minecraft:stripped_oak_log',
	'minecraft:stripped_oak_wood',
	'minecraft:stripped_spruce_log',
	'minecraft:stripped_spruce_wood',
	'minecraft:stripped_warped_hyphae',
	'minecraft:stripped_warped_stem',
	'minecraft:warped_hyphae',
	'minecraft:warped_stem',
	'tconstruct:greenheart_log',
	'tconstruct:stripped_greenheart_log',
	'tconstruct:greenheart_wood',
	'tconstruct:stripped_greenheart_wood',
	'tconstruct:skyroot_log',
	'tconstruct:stripped_skyroot_log',
	'tconstruct:skyroot_wood',
	'tconstruct:stripped_skyroot_wood',
	'tconstruct:bloodshroom_log',
	'tconstruct:stripped_bloodshroom_log',
	'tconstruct:bloodshroom_wood',
	'tconstruct:stripped_bloodshroom_wood',
	'tconstruct:enderbark_log',
	'tconstruct:stripped_enderbark_log',
	'tconstruct:enderbark_wood',
	'tconstruct:stripped_enderbark_wood'
]

BlockEvents.modification(event => {
	logs.forEach(log => {
		event.modify(log, block => {
			block.destroySpeed = 1
			block.requiresTool = true
		})
	})
})
