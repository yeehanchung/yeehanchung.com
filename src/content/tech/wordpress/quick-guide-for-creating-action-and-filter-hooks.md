---
title: Quick guide for creating action and filter hooks
slug: tech/wordpress/quick-guide-for-creating-action-and-filter-hooks
date: 2021-02-03
excerpt: ⏳
tag: wordpress
lastEdited: 2021-02-15
---

## Pre-requisites:

- Understand how to create a plugin in WordPress.
- Know when to use WordPress plugins with hooks.

This short and simple article is to guide readers on how to create hooks, namely `action hook` and `filter hook`. This article breaks down a few sections as follows:

## Two types of hooks in WordPress

The **hooks** are used so that WordPress plugins could interact with its core code.

1. Action hooks - to add or remove functions
2. Filter hooks - to modify data that is produced by functions

Generally, they can help with **reducing lines of codes**, and **improving code modularity** and **maintainability**.

## The flow of this article

- Why Action Hook?
- Creating Action Hook
- Why Filter Hook?
- Creating Filter Hook
- References

<!-- - tl;dr -->

## Why Action Hook?

> When you visit any page of a WordPress website, a series of PHP functions (named actions) are called at various points, and they are attached to action hooks. Using the action hooks provided by WordPress, you can add your own functions to the list of actions that run when any action hook is called, and you can also remove pre-existing functions from any action hook. Action hooks dictate when the actions are called. Before the closing `</head>` tag of any page, the wp_head() action hook is called, and the actions that are hooked to wp_head() are run.

## Creating Action Hook

```php
add_action($tag, $function_to_add)
```

What are the arguments inside of the above `Action Hook`?

1. `$tag` - the name of the action to which the function you're hooking to.
2. `$function_to_add` - it's a callable function, which is the name of your callback function.

How to create it?

1. Locate the provided `plugins` directory in your WordPress project.
2. Create a new folder named `your-plugin-name` and a file inside of it with the same folder name `your-plugin-name.php`.
3. In `your-plugin-name.php`, put the header code snippet provided below at the top just like how we would create a template. [Dig deeper into header?](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/)

```php
/**
 * Plugin Name: plugin-add-action
 * Author: Yee Han
 * Version: 1.0
 */
```

4. Create `add_action` hook by providing the two arguments, `$tag` and `$function_to_add` as mentioned earlier.

Notice that the name of the 2nd argument is the same as the function name `test_plugin`.

```php
add_action('my_plugin_tag', 'test_plugin');
// Receiving an argument as a parameter.
function test_plugin($test)
{
    // It will echo "You are in the plugin file" after passing in the parameter.
    echo '<script>';
    echo 'console.log(' . json_encode($test) . ')';
    echo '</script>';
}
```

4. Go to your working php file in the `themes` folder, try the code as follows:

Notice that the 1st argument from `add_action` is the same as the 1st argument in `do_action` below?

```php
// 1st argument: built-in from WordPress.
// 2nd argument: Passing into the action hook as a parameter, $test.
do_action('my_plugin_tag', 'You are in the plugin file');
```

1. Login into your `../wordpress/wp-admin` to activate the plugin.

![Activate WordPress Plugin](/img-quick-guide-for-creating-action-and-filter-hooks/activate-wordpress-plugin.png)

Notice that the plugin name reflects the name specified below.

```php
/**
 * Plugin Name: plugin-add-action
 * Author: Yee Han
 * Version: 1.0
 */
```

6. Your `php page` is now able to communicate with the `plugin` you just have created. Now the parameter is being `console.log()` in the console.

![Console output](/img-quick-guide-for-creating-action-and-filter-hooks/console-output.png)

Action Hook can be more complicated than that. Some references are listed below.

## References

- https://developer.wordpress.org/reference/functions/add_action/
- https://developer.wordpress.org/reference/functions/do_action/

---

## Filter Hook

Creating a `Filter Hook` is very similar to smithing an `Action Hook`. However, there are four arguments to be passed into the hook this time, rather than two. May refer back the steps above for activating a plugin.

```php
add_filter($tag, $function_to_add, $priority, $accepted_args)
```

> Specifying the number of `$accepted_args` is extremely important if passing more than one arguments into `do_action()` and `apply_filter()`. An example is provided in this article.

1. `$tag`: string
2. `function`: callable
3. `priority`: int
4. `accepted_args`: int

```php
Case 1: apply_filter($tag, $value)

// Remember to specify number of accepted arguments for add_filter()
Case 2: apply_filter($tag, $value1, $value2)
```

1. `$tag`: string
2. `$value`: mixed

Remember that..

- If you pass an array into the `Filter Hook`, ensure only return an array.
- Ensure passing at least one argument into `apply_filters()`.
- Only `Filter Hook` is able to return data; [array or object](https://wordpress.stackexchange.com/questions/99630/how-to-return-hook-data-when-multiple-parameters-are-present).

An example of `apply_filters()` with two different files

```php
// Plugin file
add_filter('modify_username_action', 'modify_username_function');
function modify_username_function($username) {

    $username = "My new username";
    $newUsername = $username;
    // Return modified data
    return $newUsername;
}

// Page file
$modifiedUsername = apply_filters('modify_username_action', $username);
```

Combination of `Action` and `Filter` Hooks

```php
// 2 = two arguments will be received by add_action()
add_action('add_store_id_action', 'add_store_id', 13, 2);

function add_store_id($store_user, $store_info){
    global $store_id;
    $store_id = $store_user->ID;
    // Add a Filter Hook
    add_filter('wc_product_table_query_args', 'wcpt_custom_query_args', 10, 2);
}

function wcpt_custom_query_args($args, $product_table) {
    global $store_id;
    // do something with $args
    $args += array('author' => $store_id);
    // return the array
    return $args;
}
```

## Want to overwrite theme file from filter plugin?

- [WordPress stackexchange - overwrite theme file from plugin](https://wordpress.stackexchange.com/questions/258026/overwrite-theme-file-from-plugin)

## References for Filter Hook

- [Developer WordPress functions add_filter](https://developer.wordpress.org/reference/functions/add_filter/)
- [Developer WordPress functions apply_filter](https://developer.wordpress.org/reference/functions/apply_filters/)

## General references that I found useful

- [Hostinger - how to create wordpress plugin](https://www.hostinger.my/tutorials/how-to-create-wordpress-plugin)
- [Codex WordPress Plugin_API Action Reference](https://codex.wordpress.org/Plugin_API/Action_Reference)
- [Codex WordPress Plugin_API](https://codex.wordpress.org/Plugin_API)
- [Developer WordPress Plugin Hooks Actions](https://developer.wordpress.org/plugins/hooks/actions/)
