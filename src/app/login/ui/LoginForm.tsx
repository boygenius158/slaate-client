import React from 'react'
import { Button } from "@/components/shadcnUI/button"
import { Input } from "@/components/shadcnUI/input"
import { Label } from "@/components/shadcnUI/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/shadcnUI/card"

interface LoginFormProps {
  email: string
  password: string
  validationErrors: { emailValid: boolean; passwordValid: boolean }
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function LoginForm({
  email = '',
  password = '',
  validationErrors = { emailValid: true, passwordValid: true },
  onEmailChange = () => { },
  onPasswordChange = () => { },
  onSubmit = (e) => { e.preventDefault() }
}: LoginFormProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              value={email}
              onChange={onEmailChange}
              aria-invalid={!validationErrors.emailValid}
              aria-describedby={!validationErrors.emailValid ? "email-error" : undefined}
            />
            {!validationErrors.emailValid && (
              <p id="email-error" className="text-sm text-red-500">Email is invalid</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              aria-invalid={!validationErrors.passwordValid}
              aria-describedby={!validationErrors.passwordValid ? "password-error" : undefined}
            />
            {!validationErrors.passwordValid && (
              <p id="password-error" className="text-sm text-red-500">Password is invalid</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Login</Button>
        </CardFooter>
      </form>
    </Card>
  )
}