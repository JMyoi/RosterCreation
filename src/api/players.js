import { supabase } from './supabaseClient.js'

export async function getPlayers() {
  const { data, error } = await supabase
    .from('players')
    .select('*')
    .order('created_at')
  if (error) throw error
  return data
}

export async function createPlayer({ name, height, position }) {
  const { data, error } = await supabase
    .from('players')
    .insert([{ name, height, position }])
    .select()
  if (error) throw error
  return data[0]
}

export async function updatePlayer(id, { name, height, position }) {
  const { data, error } = await supabase
    .from('players')
    .update({ name, height, position })
    .eq('id', id)
    .select()
  if (error) throw error
  return data[0]
}

export async function deletePlayer(id) {
  const { error } = await supabase.from('players').delete().eq('id', id)
  if (error) throw error
}
