def create_characters
  races = %w[Elf Dwarf Halfling Human Changling Orc]
  classes = %w[Fighter Monk Druid Rogue Wizard Sorcerer Warlock Bard]
  10.times do |i|
    Character.create(
      name: Faker::FunnyName.two_word_name,
      race: races.sample,
      char_class: classes.sample,
      level: rand(1..20),
      alignment: 'good',
      back_story: Faker::Lorem.sentence,
      traits: 'n/a',
      user_id: 1
    )
  end
end

create_characters
