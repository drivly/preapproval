import { useForm, Controller, SubmitHandler  } from 'react-hook-form';
import { postPreapproval } from '../../../api/preapproval/post';
import LabeledInput from '../../shared/LabeledInput';
import LabeledSelect from '../../shared/LabeledSelect';
import LabeledCheckbox from '../../shared/LabeledCheckbox';
import Button from '../../shared/Button';
import { sufixes, states } from './constants';

enum SuffixesEnum {
    none = 'None',
    jr = 'Jr.',
    sr = 'Sr.'
}

export type FormData = {
    firstName: string;
    lastName: string;
    MI: string;
    suffix: SuffixesEnum;
    email: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    policy: boolean;
};

const PreapprovedForm = () => {
    const { control, handleSubmit } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => { 
        postPreapproval(data);
    };

    return (
        <div className="pt-[50px] pb-[145px] px-6 bg-black-100 lg:w-1/2 xl:px-32 lg:min-h-screen lg:py-40">
            <p className="hidden lg:block font-bold text-price text-text-white-300 mb-[77px]">Get Pre-approved</p>
            <form className="flex flex-wrap w-full mb-16" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full lg:flex lg:justify-between">
                    <div className="w-full mb-4 lg:w-[32%] lg:mb-8">
                        <Controller 
                            name="firstName"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, fieldState: { invalid } }) => {
                                return <LabeledInput {...field} label="First name" required invalid={invalid} />
                            }}
                        />
                        
                    </div>
                    <div className="w-full mb-4 lg:w-[8.5%] lg:mb-8">
                    <Controller 
                        name="MI"
                        control={control}
                        render={({ field }) => {
                            return <LabeledInput invalid={false} label="MI" {...field} />
                        }}/>
                    </div>
                    <div className="w-full mb-4 lg:w-[32%] lg:mb-8">
                        <Controller 
                            name="lastName"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, fieldState: { invalid } }) => {
                            return <LabeledInput label="Last name"  required {...field} invalid={invalid} />
                        }}/>   
                    </div>
                    <div className="w-full mb-4 lg:w-[20%] lg:mb-8">
                        <Controller 
                            name="suffix"
                            control={control}
                            render={({ field }) => {
                            return <LabeledSelect label="Suffix" invalid={false} {...field} values={sufixes} />
                        }}/>
                    </div>
                </div>
                <div className="w-full lg:flex lg:justify-between">
                    <div className="w-full mb-4 lg:w-[49%] lg:mb-8">
                        <Controller 
                            name="email"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, fieldState: { invalid } }) => {
                            return <LabeledInput type="email" label="Email" required {...field} invalid={invalid}/>
                        }}/>
                    </div>
                    <div className="w-full mb-4 lg:w-[49%] lg:mb-8">
                        <Controller 
                            name="phone"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, fieldState: { invalid } }) => {
                            return <LabeledInput label="Phone Number" required {...field} invalid={invalid}/>
                        }}/>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full mb-4 lg:mb-8">
                        <Controller 
                            name="street"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, fieldState: { invalid } }) => {
                            return <LabeledInput label="Street address" required {...field} invalid={invalid}/>
                        }}/>
                    </div>
                </div>
                <div className="w-full lg:flex lg:justify-between">
                    <div className="w-full mb-4 lg:w-[38%] lg:mb-0">
                        <Controller 
                            name="city"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, fieldState: { invalid } }) => {
                            return <LabeledInput label="City" required {...field} invalid={invalid}/>
                        }}/>
                    </div>
                    <div className="w-full mb-4 lg:w-[18%] lg:mb-0">
                        <Controller 
                            name="state"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, fieldState: { invalid } }) => {
                            return <LabeledSelect label="State" required invalid={invalid} {...field} values={states} />
                        }}/>
                    </div>
                    <div className="w-full lg:w-[38%] lg:mb-0">
                        <Controller 
                            name="zip"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, fieldState: { invalid } }) => {
                            return <LabeledInput label="Zip/Postal" invalid={invalid} required {...field}/>
                        }}/>
                    </div>
                </div>
            </form>
            <p className="text-policy text-text-white-200 mb-12">
                By clicking the I Agree checkbox and Submit, I consent to have my credit file accessed for purposes of prequalifying for a vehicle loan. This is a soft inquiry and will not impact my credit score. I agree to the Privacy Notice, Terms and Conditions and I acknowledge I may be contacted by Everyday Motors. I understand that I might not prequalify depending on the prequalification criteria.
            </p>
            <div className="lg:flex lg:justify-between lg:items-center">
                <div className="mb-16 lg:mb-0">
                    <Controller 
                        name="policy"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => {
                        return <LabeledCheckbox label="I Agree" required {...field} />
                    }}/>
                </div>
                <div className="lg:min-w-[236px]">
                    <Button onClick={handleSubmit(onSubmit)}>Submit</Button>  
                </div>
            </div>
        </div>
    );
};

export default PreapprovedForm;
