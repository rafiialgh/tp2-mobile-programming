import React from 'react'

export type ProfileProps = {
  setName: React.Dispatch<React.SetStateAction<string>>
  name: string | null
}

export type WelcomeProps = {
  name: string | null
}