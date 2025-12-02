'use client';

import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Logo from '@/assets/Logo';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Inputs = {
  f_name: string;
  l_name: string;
  email: string;
  p_number: string;
  dob: Date;
  gender: string;
  role: string;
  password: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const onError = (errors: any) => {
    console.log('Validation Errors:', errors);
  };

  return (
    <div className="bg-white-50 space-y-6 rounded-md p-4">
      <div className="space-y-2">
        <div className="mx-auto w-fit">
          <Logo />
        </div>
        <h1 className="text-center text-2xl font-medium">
          Sign up to continue
        </h1>
        <p className="text-white-300 text-center text-sm">
          Take the first step toward feeling better
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FieldSet>
          <FieldLegend className="sr-only">User information</FieldLegend>
          <FieldDescription className="sr-only">
            Provide essential personal and contact information for account setup
            and communication.
          </FieldDescription>
          <FieldGroup>
            <div className="flex flex-col items-start gap-4 md:flex-row">
              <Field>
                <FieldLabel htmlFor="f_name">First name*</FieldLabel>
                <Input
                  id="f_name"
                  placeholder="John"
                  {...register('f_name', {
                    required: 'First name is required',
                  })}
                />
                <FieldError errors={[errors.f_name]} />
              </Field>
              <Field>
                <FieldLabel htmlFor="l_name">Last name*</FieldLabel>
                <Input
                  id="l_name"
                  placeholder="Doe"
                  {...register('l_name', { required: 'Last name is required' })}
                />
                <FieldError errors={[errors.l_name]} />
              </Field>
            </div>
            <div className="flex flex-col items-start gap-4 md:flex-row">
              <Field>
                <FieldLabel htmlFor="p_number">Gender*</FieldLabel>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: 'Gender is required' }}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError errors={[errors.gender]} />
              </Field>
              <Field>
                <FieldLabel htmlFor="dob">Date of birth*</FieldLabel>
                <Controller
                  name="dob"
                  control={control}
                  rules={{ required: 'DOB is required' }}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                        >
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange} // Connects calendar select to form
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                <FieldError errors={[errors.dob]} />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="p_number">Phone no.*</FieldLabel>
              <Input
                id="p_number"
                type="tel"
                placeholder="+2341234567890"
                {...register('p_number', {
                  required: 'Phone number is required',
                  minLength: {
                    value: 14,
                    message: 'Phone number cannot be less than 14 characters',
                  },
                  maxLength: {
                    value: 14,
                    message: 'Phone number cannot be more than 14 characters',
                  },
                  pattern: {
                    value: /^\+234\d{10}$/,
                    message:
                      'Enter a valid phone number. Number must start with +234',
                  },
                })}
              />
              <FieldError errors={[errors.p_number]} />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email*</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Enter a valid email',
                  },
                })}
              />
              <FieldError errors={[errors.email]} />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password*</FieldLabel>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                {...register('password', {
                  required: 'Password is required',
                  validate: {
                    minLength: (v) =>
                      v.length >= 8 || 'Must be at least 8 characters',
                    hasUpper: (v) =>
                      /[A-Z]/.test(v) || 'Must contain an uppercase letter',
                    hasLower: (v) =>
                      /[a-z]/.test(v) || 'Must contain a lowercase letter',
                    hasNumber: (v) => /\d/.test(v) || 'Must contain a number',
                    hasSpecial: (v) =>
                      /[\W_]/.test(v) || 'Must contain a special character',
                  },
                })}
              />
              <FieldError errors={[errors.password]} />
            </Field>
            <Input
              {...register('role', { required: true })}
              defaultValue="patient"
              className="sr-only h-0 w-0"
            />
          </FieldGroup>
        </FieldSet>
        <Button className="bg-primary-500 mt-6 w-full">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
