import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { bulletsInfo } from '../../const';
import * as Yup from 'yup';
import { postNewStock } from '../Redux/stockAction';

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.oneOf(
			bulletsInfo.map((bullet) => bullet.name),
			'Debes seleccionar una opción válida'
		)
		.required('Este campo es obligatorio'),
	amount: Yup.number()
		.positive('El número debe ser mayor que cero')
		.required('Este campo es obligatorio'),
	usedRaw: Yup.number()
		.positive('El número debe ser mayor que cero')
		.required('Este campo es obligatorio')
		.test(
			'usedRaw',
			'El valor debe ser menor a la cantidad disponible',
			function (value) {
				const { rawStock } = this.parent;
				console.log(this.parent);
				return value <= rawStock;
			}
		),
});

function StockForm() {
	const dispatch = useDispatch();
	const rawStock = useSelector((state) => state.rawStock);

	const initialValues = {
		name: '',
		amount: 0,
		usedRaw: 0,
		rawStock: rawStock.available,
	};

	const handleSubmit = (values, { setSubmitting, resetForm }) => {
		values.unitPrice = bulletsInfo.find(
			(bull) => bull.name === values.name
		).unitPrice;
		dispatch(postNewStock(values));
		setSubmitting(false);
		resetForm();
	};

	return (
		<div>
			<span>Plomo disponible: {rawStock.available} Kg</span>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
				enableReinitialize={true}
			>
				{({ isSubmitting, touched, errors }) => (
					<Form>
						<div>
							<label htmlFor="name">Tipo: </label>
							<Field
								as="select"
								id="name"
								name="name"
							>
								<option
									value=""
									disabled
									defaultValue
								>
									Seleccione uno
								</option>
								{bulletsInfo.map((bullet) => (
									<option
										key={bullet.name}
										value={bullet.name}
									>
										{bullet.name}
									</option>
								))}
							</Field>
							{touched.name && errors.name && (
								<ErrorMessage
									name="name"
									component="div"
									className="text-red-500 min-h-5 max-h-5"
								/>
							)}
						</div>
						<div>
							<label htmlFor="amount">Cantidad Fabricada: </label>
							<Field
								type="number"
								id="amount"
								name="amount"
							/>
							Kg
							{touched.amount && errors.amount && (
								<ErrorMessage
									name="amount"
									component="div"
									className="text-red-500 min-h-5 max-h-5"
								/>
							)}
						</div>
						<div>
							<label htmlFor="usedRaw">Plomo utilizado: </label>
							<Field
								type="number"
								id="usedRaw"
								name="usedRaw"
							/>
							Kg
							{touched.usedRaw && errors.usedRaw && (
								<ErrorMessage
									name="usedRaw"
									component="div"
									className="text-red-500 min-h-5 max-h-5"
								/>
							)}
						</div>
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
							Cargar
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default StockForm;
