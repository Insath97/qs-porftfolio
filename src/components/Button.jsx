import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Reusable Button Component
 * @param {string} variant - Button style variant: 'primary', 'secondary', 'outline'
 * @param {string} size - Button size: 'sm', 'md', 'lg'
 * @param {ReactNode} children - Button content
 * @param {string} to - Link destination (for Link buttons)
 * @param {function} onClick - Click handler
 * @param {ReactNode} icon - Optional icon element
 * @param {boolean} disabled - Disabled state
 * @param {string} className - Additional CSS classes
 */
const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    to,
    onClick,
    icon,
    disabled = false,
    className = '',
    ...props
}) => {
    // Base button styles
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-smooth btn-hover-lift focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Variant styles
    const variantStyles = {
        primary: 'bg-gradient-to-r from-coolBlue to-emerald text-white hover:shadow-lg focus:ring-coolBlue',
        secondary: 'bg-navy text-white hover:bg-opacity-90 focus:ring-navy dark:bg-coolBlue',
        outline: 'border-2 border-coolBlue text-coolBlue hover:bg-coolBlue hover:text-white focus:ring-coolBlue dark:border-emerald dark:text-emerald dark:hover:bg-emerald dark:hover:text-navy',
    };

    // Size styles
    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    // Combine all styles
    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

    // Animation variants
    const buttonVariants = {
        hover: { scale: 1.02 },
        tap: { scale: 0.98 },
    };

    // Button content
    const buttonContent = (
        <>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </>
    );

    // Render as Link if 'to' prop is provided
    if (to) {
        return (
            <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block"
            >
                <Link to={to} className={buttonClasses} {...props}>
                    {buttonContent}
                </Link>
            </motion.div>
        );
    }

    // Render as button
    return (
        <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={onClick}
            disabled={disabled}
            className={buttonClasses}
            {...props}
        >
            {buttonContent}
        </motion.button>
    );
};

export default Button;
