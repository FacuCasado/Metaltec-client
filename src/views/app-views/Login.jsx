import useTypingEffect from '../../hooks/typing-effect';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import bgImage from '../../assets/fondo1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { singIn } from '../../Redux/userActions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('El mail no es valido.')
		.required('Este campo es requerido.'),
	password: Yup.string().required('Este campo es requerido.'),
});

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isLogin = useSelector((state) => state.isLogin);
	const text = useTypingEffect('METALTEC', 200);

	useEffect(() => {
		isLogin && navigate('/home');
	}, [isLogin, navigate]);

	const handleSubmit = (values, { setSubmitting, resetForm }) => {
		setSubmitting(true);
		dispatch(singIn(values));
		setSubmitting(false);
		resetForm();
	};
	return (
		<div
			className="w-screen h-screen flex flex-col justify-center items-center bg-cover bg-center"
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<div className="bg-secondary m-1 p-5 rounded-xl text-text">
				<h1 className="text-9xl text-center mb-8">{text}</h1>
				<div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					{({ isSubmitting, touched, errors }) => (
						<Form className="flex flex-col justify-center items-center">
							<div className="flex my-2">
								<label
									htmlFor="email"
									className="mr-2"
								>
									Email:
								</label>
								<Field
									type="email"
									id="email"
									name="email"
									placeholder="Email aqui"
								/>
							</div>
							{touched.email && (
								<ErrorMessage
									name="email"
									component="div"
									className="text-red-500 min-h-5 max-h-5"
								/>
							)}

							<div className="flex my-2">
								<label
									htmlFor="password"
									className="mr-2"
								>
									Contraseña:
								</label>
								<Field
									type="password"
									id="password"
									name="password"
									placeholder="Contraseña aqui"
								/>
							</div>
							{touched.password && (
								<ErrorMessage
									name="password"
									component="div"
									className="text-red-500"
								/>
							)}
							<button
								type="submit"
								className="btnPrimary"
								disabled={isSubmitting || !!Object.keys(errors).length}
								style={{
									cursor:
										isSubmitting || !!Object.keys(errors).length
											? 'not-allowed'
											: 'pointer',
								}}
							>
								Iniciar sesión
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default Login;
