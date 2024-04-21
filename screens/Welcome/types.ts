import React from 'react'

export type ProfileProps = {
  setName: React.Dispatch<React.SetStateAction<string>>
}

export type WelcomeProps = {
  name: string | null
}