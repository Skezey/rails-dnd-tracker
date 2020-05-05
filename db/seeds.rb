def create_characters
  races = %w[Elf Dwarf Halfling Human Changling Orc]
  classes = %w[Fighter Monk Druid Rogue Wizard Sorcerer Warlock Bard]
  10.times do |i|
    character = Character.create(
      name: Faker::FunnyName.two_word_name,
      race: races.sample,
      char_class: classes.sample,
      level: rand(1..20),
      alignment: 'good',
      back_story: Faker::Lorem.sentence,
      traits: 'n/a',
      user_id: 1
    )
    CharacterAttribute.create(
      strength: rand(1..20),
      charisma: rand(1..20),
      intelligence: rand(1..20),
      dexterity: rand(1..20),
      constitution: rand(1..20),
      wisdom: rand(1..20),
      character_id: character.id
    )
  end
  puts 'created 10 users with attributes'
end

create_characters
